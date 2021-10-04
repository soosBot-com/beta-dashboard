import Sidebar from "./sidebar/Sidebar";
import HomePage from "./pages/HomePage";
import { useEffect } from 'react'

function App() {
  document.body.classList.remove("dark-mode")
  useEffect(() => {
    let users_theme = localStorage.getItem("soosBot.userSettings.theme");
    if (users_theme) {
        document.body.classList.add(`${users_theme}-mode`)
    } else {
      localStorage.setItem("soosBot.userSettings.theme", "dark");
      document.body.classList.add("dark-mode")
    }
  }, [])
  return (
    <>
      <div className="content">
        <Sidebar/>
        <HomePage/>
      </div>
   </>)
}

export default App;
