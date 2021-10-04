import {AnimatePresence, motion} from "framer-motion";
import settings_close_icon from '../../icons/settings_close_icon.svg'
import TimezoneDropdown from "./TimezoneDropdown";
import ThemeSelector from "./ThemeSelector";

export default function Settings ({ shown, setShown }){
    // const [logoutPrompt, setLogoutPrompt] = useState(false)

    return (
        <>
        <AnimatePresence >
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
                            <button className="logout">
                                Log Out
                            </button>
                        </div>

                        <button className="exit" onClick={() => setShown(!setShown)}>
                            <img src={settings_close_icon} alt="x"/>
                        </button>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
        </>
    )
}