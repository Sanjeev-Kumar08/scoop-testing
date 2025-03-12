import { useEffect } from 'react'
import './App.css'

function App() {

  useEffect(() => {
    // Redirect to the app if installed, otherwise go to Play Store
    window.location.href =
      "intent://scoop-testing.vercel.app/#Intent;scheme=https;package=com.markweston.scoop;S.browser_fallback_url=https://play.google.com/store/apps/details?id=com.markweston.scoop&hl=en_IN;end;";
  }, []);

  return (
    <>
      <h1>Scoop Testing</h1>
      <h3>/.well-known/assetlinks.json</h3>
    </>
  )
}

export default App
