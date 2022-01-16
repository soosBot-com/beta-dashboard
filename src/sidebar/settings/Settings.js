import {AnimatePresence, motion} from "framer-motion";
import settings_close_icon from '../../icons/settings_close_icon.svg'
import TimezoneDropdown from "./TimezoneDropdown";
import ThemeSelector from "./ThemeSelector";
import { useState, useEffect, useRef, useCallback } from "react";

export default function Settings ({ shown, setShown }){
    const [logoutPrompt, setLogoutPrompt] = useState(false)
    const logoutModal = useRef(null);


    const clickOutSideToClose = useCallback((nativeEvent) => {
        if (logoutPrompt) {
          if (!logoutModal.current.contains(nativeEvent.target) && !nativeEvent.target.classList.contains("logout_button")) {
            setLogoutPrompt(false)
        }
        }
      }, [logoutPrompt])
    
      const escapeToClose = useCallback((event) => {
        if (logoutPrompt) {
          if (event.keyCode === 27) {
            setLogoutPrompt(false)
        }
        }
      }, [logoutPrompt])

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
        <AnimatePresence key="settingsPage">
            {shown && (
                <>
                    <motion.div
                        className="settings"
                        initial={{ opacity: 0, scale: 1.5}}
                        animate={{ opacity: 1, scale: 1}}
                        exit={{ opacity: 0, scale: 0.95, duration: 1}}
                        transition={{delay: 0.1, type: "spring", duration: 0.3}}
                        key="settings">
                        <div>
                            <h1>Settings</h1>
                            <div className="settings-seperator"/>
                            <h2>Timezone</h2>
                            <TimezoneDropdown/>
                            <h2>Theme</h2>
                            <ThemeSelector/>
                            <button className="logout" onClick={() => {
                                setLogoutPrompt(true)
                                console.log("HI")
                                console.log(logoutPrompt)
                            }}>
                                Log Out
                            </button>
                        </div>

                        <button className="exit" onClick={() => setShown(!setShown)}>
                            <img src={settings_close_icon} alt="x"/>
                        </button>
                    </motion.div>
                    <AnimatePresence key="logoutPrompt">
                        {
                        logoutPrompt && (
                            <motion.div className="logoutPrompt"
                            initial={{ opacity: 0}}
                            animate={{ opacity: 1}}
                            exit={{ opacity: 0, duration: 0.3}}
                            transition={{delay: 0.1, type: "spring", duration: 0.3}}>
                                <motion.div className="logoutModal" ref={logoutModal}
                                    initial={{ opacity: 0, scale: 1.5}}
                                    animate={{ opacity: 1, scale: 1}}
                                    exit={{ opacity: 0, scale: 0.30, duration: 0.3}}
                                    transition={{delay: 0.1, type: "spring", duration: 0.3}}>
                                    <h1>Logout</h1>
                                    <p>Are you sure you want to logout?</p>
                                    <div className="buttons">
                                        <button className="logout_button" onClick={() => (
                                            window.location.href = "https://google.com"
                                        )}>Logout</button>
                                        <button className="cancel_button" onClick={() => (
                                            setLogoutPrompt(false)
                                        )}>Cancel</button>
                                    </div>
                                </motion.div>
                            </motion.div>
                        )
                        }
                    </AnimatePresence>
                </>
            )}
        </AnimatePresence>
        </>
    )
}