import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    // Redirect to the app if installed, otherwise go to Play Store
    window.location.href =
      "intent://scoop-testing.vercel.app/#Intent;scheme=https;package=com.markweston.scoop;S.browser_fallback_url=https%3A%2F%2Fplay.google.com%2Fstore%2Fapps%2Fdetails%3Fid%3Dcom.markweston.scoop;end;"
  }, []);

  return (
    <>
      <h1>Scoop Testing</h1>
      <h3>/.well-known/assetlinks.json</h3>
    </>
  )
}

export default App
