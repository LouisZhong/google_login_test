import '../App.css';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import { useState } from 'react'

function Login() {
  const [userEmail, setUserEmail] = useState('')
  const [userName, setUserName] = useState('')
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const onSuccess = (res) => {
    console.log("LOGIN SUCCESS! Current user:", res.profileObj)
    const userEmail = res.profileObj.email
    const userName = res.profileObj.name
    setUserEmail(userEmail)
    setUserName(userName)
    setIsLoggedIn(true)
  }

  const onFailure = (res) => {
    console.log("LOGIN FAILED! res: ", res)
  }

  const handleLogout = () => {
    setIsLoggedIn(false)
  }

  return (
    <div id="singInButton">
      {isLoggedIn ? (
        <div>
          <GoogleLogout
            clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            buttonText={"登出"}
            onLogoutSuccess={handleLogout}  
          />
          <div className='userInfo'>
            <li>Email: {userEmail}</li>
            <li>User Name: {userName}</li>
          </div>          
        </div>
      ) : (
        <GoogleLogin
          clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
          buttonText="使用 Google 登入"
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={'single_host_origin'}
          isSignedIn={true}
        />
      )}
    </div>
  )
}

export default Login