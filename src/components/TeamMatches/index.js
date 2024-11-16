// Write your code here
import {Component} from 'react'
import Loader from 'react-loader-spinner'

import LatestMatch from '../LatestMatch'

import MatchCard from '../MatchCard'

import './index.css'

class TeamMatches extends Component {
  state = {matchData: {}, isLoading: true}

  componentDidMount() {
    this.getMatchItemData()
  }

  getFormattedData = data => ({
    id: data.id,
    date: data.date,
    venue: data.venue,
    result: data.result,
    umpires: data.umpires,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
    manOfTheMatch: data.man_of_the_match,
  })

  getMatchItemData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)

    const fetchedData = await response.json()
    const formattedData = {
      teamBannerUrl: fetchedData.team_banner_url,
      latestMatchDetails: this.getFormattedData(
        fetchedData.latest_match_details,
      ),
      recentMatches: fetchedData.recent_matches.map(eachItem =>
        this.getFormattedData(eachItem),
      ),
    }

    this.setState({matchData: formattedData, isLoading: false})
  }

  getRouteClassName = () => {
    const {match} = this.props
    const {params} = match
    const {id} = params

    switch (id) {
      case 'RCB':
        return 'rcb'
      case 'KKR':
        return 'kkr'
      case 'KXP':
        return 'kxp'
      case 'CSK':
        return 'csk'
      case 'RR':
        return 'rr'
      case 'MI':
        return 'mi'
      case 'SRH':
        return 'srh'
      case 'DC':
        return 'dc'
      default:
        return ''
    }
  }

  render() {
    const {matchData, isLoading} = this.state
    const {teamBannerUrl, latestMatchDetails, recentMatches} = matchData
    const className = `team-matches-container ${this.getRouteClassName()}`

    return (
      <div className={className}>
        {isLoading ? (
          <div data-testid="loader">
            <Loader type="TailSpin" color="#00bfff" height={50} width={50} />
          </div>
        ) : (
          <>
            <img src={teamBannerUrl} alt="team banner" className="banner-img" />
            <h1 className="match-state">Latest Matches</h1>
            <LatestMatch latestDetails={latestMatchDetails} />
            <ul className="recent-list">
              {recentMatches.map(eachItem => (
                <MatchCard matchDetails={eachItem} key={eachItem.id} />
              ))}
            </ul>
          </>
        )}
      </div>
    )
  }
}

export default TeamMatches
