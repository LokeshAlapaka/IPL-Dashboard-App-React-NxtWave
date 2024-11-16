// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestDetails} = props
  const {
    date,
    venue,
    result,
    umpires,
    competingTeam,
    competingTeamLogo,
    firstInnings,
    secondInnings,
    manOfTheMatch,
  } = latestDetails

  return (
    <div className="latest-card">
      <div>
        <div className="left-holder">
          <p className="team-name">{competingTeam}</p>
          <p className="match-date">{date}</p>
          <p className="match-venue">{venue}</p>
          <p className="match-venue">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          alt={`latest match ${competingTeam}`}
          className="latest-img"
        />
      </div>
      <hr className="separator" />
      <div className="right-holder">
        <h1 className="latest-innings">First Innings</h1>
        <p className="latest-values">{firstInnings}</p>
        <h1 className="latest-innings">Second Innings</h1>
        <p className="latest-values">{secondInnings}</p>
        <h1 className="latest-innings">Man Of The Match</h1>
        <p className="latest-values">{manOfTheMatch}</p>
        <h1 className="latest-innings">Umpires</h1>
        <p className="match-venue">{umpires}</p>
      </div>
    </div>
  )
}

export default LatestMatch
