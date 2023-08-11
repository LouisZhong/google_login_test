import './App.css';
import Login from "./components/login"
import { useEffect } from 'react'
import { gapi } from 'gapi-script'

const clientId = '460405004715-gj6e1ur9ii90vv5po660mh7vv8ofmqhu.apps.googleusercontent.com'

function App() {

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: clientId,
        scope: ""
      })
      console.log('env', process.env.REACT_APP_GOOGLE_CLIENT_ID)
    }
    gapi.load('client:auth2', start )
  })

  return (
    <div className='app'>
      <Login/>
    </div>
  );
}

export default App;
