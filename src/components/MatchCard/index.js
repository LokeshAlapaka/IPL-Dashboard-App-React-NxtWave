// Write your code here
import './index.css'

const MatchCard = props => {
  const {matchDetails} = props
  const {competingTeam, competingTeamLogo, result, matchStatus} = matchDetails

  const getMatchStatusClassName = status =>
    status === 'Won' ? 'match-won' : 'match-lost'

  const matchStatusClassName = `match-status ${getMatchStatusClassName(
    matchStatus,
  )}`
  return (
    <li className="recent-match-item">
      <img
        src={competingTeamLogo}
        alt={`competing team ${competingTeam}`}
        className="recent-img"
      />
      <p className="recent-team">{competingTeam}</p>
      <p className="match-result">{result}</p>
      <p className={matchStatusClassName}>{matchStatus}</p>
    </li>
  )
}

export default MatchCard
