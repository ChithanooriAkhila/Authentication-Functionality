// Write your JS code here
import {Link, withRouter} from 'react-router-dom'

const Header = () => (
  <ul>
    <li>
      <Link to="/">Home</Link>
    </li>
    <li>
      <Link to="/about">About</Link>t
    </li>
  </ul>
)

export default withRouter(Header)
