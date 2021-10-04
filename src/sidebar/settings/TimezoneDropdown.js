import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef, useEffect, useCallback } from "react";
import arrow from '../../icons/arrow-down.svg'
import loading_gif from '../../icons/loading.gif'

function TimezoneDropdown() {
  const [opened, setOpened] = useState(false);
  const [loading, setLoading] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Select an option!");
  const dropdown = useRef(null);


  const options = [
    { name: "UTC -12" },
    { name: "UTC -11" },
    { name: "UTC -10" },
    { name: "UTC -9" },
    { name: "UTC -8" },
    { name: "UTC -6" },
    { name: "UTC -5" },
    { name: "UTC -4" },
    { name: "UTC -3" },
    { name: "UTC -2" },
    { name: "UTC -1" },
    { name: "UTC" },
    { name: "UTC +1" },
    { name: "UTC +2" },
    { name: "UTC +3" },
    { name: "UTC +4" },
    { name: "UTC +5" },
    { name: "UTC +6" },
    { name: "UTC +7" },
    { name: "UTC +8" },
    { name: "UTC +9" },
    { name: "UTC +10" },
    { name: "UTC +11" },
    { name: "UTC +12" },
  ];

  // function sleep(ms) {
  //   return new Promise((resolve) => {
  //     setTimeout(resolve, ms);
  //   });
  // }

  useEffect(() => {
    let option_ = localStorage.getItem("soosBot.userSettings.timezone.selected")
    if (option_) {
      setSelectedOption(option_)
    }
  }, [])

  function selectOption (option) {
    if (option === selectedOption) {
      setSelectedOption("Select an option!")
      localStorage.removeItem("soosBot.userSettings.timezone.selected")
      return
    }
    setLoading(true)
    setSelectedOption(option)
    localStorage.setItem("soosBot.userSettings.timezone.selected", option)
    setLoading(false)
  }

  const clickOutSideToClose = useCallback((nativeEvent) => {
    if (opened) {
      if (!dropdown.current.contains(nativeEvent.target)) {
        setOpened(false)
    }
    }
  }, [opened])

  const escapeToClose = useCallback((event) => {
    if (opened) {
      if (event.keyCode === 27) {
        setOpened(false)
    }
    }
  }, [opened])

  useEffect(() => {
    document.addEventListener("click", clickOutSideToClose)
    document.addEventListener("keydown", escapeToClose)

    return function cleanup() {
      document.removeEventListener("click", clickOutSideToClose)
      document.addEventListener("keydown", escapeToClose)
    }
  }, [clickOutSideToClose, escapeToClose])

  return (
    <>
      <div ref={dropdown} className="dropdown" onClick={
        () => {setOpened(!opened)}
      }>
        <motion.div className="select-box">
          <p>{selectedOption}</p>
          {loading ? <img src={loading_gif} alt="" className="loading"/> : <motion.img src={arrow} alt="⌄" className="arrow" animate={{ rotate: opened ? 180 : 0 }} transition={{type: "tween"}}/>}
        </motion.div>
        <AnimatePresence>
          {opened && (
            <motion.div
              className="options-box"
              initial={{ opacity: 0, maxHeight: "0em"}}
              animate={{ opacity: 1, maxHeight: "15em"}}
              exit={{ opacity: 0, maxHeight: "0em"}}
              transition={{type:"spring", duration: 0.4, velocity:3, damping:8, stiffness:80 }}>           
              <ul>
                {options.map((option) => (
                  <li key={option["name"]} onClick={() => {selectOption(option["name"])}} className={selectedOption === option.name ? "selected" : ""}
                  >
                    <p>{option["name"]}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </>
  );
}

export default TimezoneDropdown;