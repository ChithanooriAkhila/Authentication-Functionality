// Write your JS code here
import Cookies from 'js-cookie'
import {withRouter} from 'react-router-dom'

const LogoutButton = props => {
  const logoutUser = async () => {
    Cookies.remove('jwt_token')
    const {history} = props
    history.replace('/login')
  }
  return (
    <div>
      <button type="button" onClick={logoutUser}>
        Logout
      </button>
    </div>
  )
}

export default withRouter(LogoutButton)
