import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'

function ThemeSelector() {
  const [selected, setSelected] = useState("dark");

  useEffect(() => {
    let users_theme = localStorage.getItem("soosBot.userSettings.theme");
    if (users_theme) {
        setSelected(users_theme)
    }
  }, [])

  function selectColor(color) {
      let users_theme = localStorage.getItem("soosBot.userSettings.theme");
      localStorage.setItem("soosBot.userSettings.theme", color)
      setSelected(color)
      document.body.classList.remove(`${users_theme}-mode`)
      document.body.classList.add(`${color}-mode`)
  }

  return (
    <div className="select">
      <div className="options">
      <div className="light" onClick={() => selectColor("light")}>
        <p>Light</p>
      </div>
      <div className="dark" onClick={() => selectColor("dark")}>
        <p>Dark</p>
      </div>
      
      </div>
      <motion.div className="selector" animate={{ marginLeft: (selected === "light") ? "0.5em" : "7.5em", transition: {type: "spring", duration: 0.5}}}/>

    </div>
  );
}

export default ThemeSelector;
