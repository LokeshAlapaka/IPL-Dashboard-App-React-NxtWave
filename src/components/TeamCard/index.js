// Write your code here
import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {id, name, teamImageUrl} = teamDetails

  return (
    <li className="list-item">
      <Link to={`/team-matches/${id}`} className="link-item">
        <img src={teamImageUrl} alt={name} className="team-img" />
        <div>
          <p className="team-name">{name}</p>
        </div>
      </Link>
    </li>
  )
}

export default TeamCard
