import PrivateIcon from '../icons/private.svg'
import PublicIcon from '../icons/public.svg'
import InvisibleIcon  from '../icons/invisible.svg'
import { motion } from 'framer-motion'
import { useState } from 'react'

export default function HomePage() {
    const [selected, setSelected] = useState("public");


    const margins = {
        public: "5em",
        private: "18em",
        invisible: "31.1em"
    }
    
    return (
        <>
            <div className="main">
                <div className="main-content">
                    <div className="soosbot-profile">
                        <h1>soosBot Profile</h1>
                        <div className="profile-visiblity">
                            <div className="options">
                            <div className={selected === "public" ? "public selected" : "public"} onClick={() => setSelected("public")}>
                                <img src={PublicIcon} alt="?"/>
                                <p>Public</p>
                            </div>
                            <div className={selected === "private" ? "private selected" : "private"} onClick={() => setSelected("private")}>
                                <img src={PrivateIcon} alt="?" />
                                <p>Private</p>
                            </div>
                            <div className={selected === "invisible" ? "invisible selected" : "invisible"} onClick={() => setSelected("invisible")}>
                                <img src={InvisibleIcon} alt="?" />
                                <p>Invisible</p>
                            </div>
                            </div>
                            <motion.div key="soosbotProfileSelector" className="selector" animate={{ marginLeft: margins[selected], transition: {type: "spring", duration: 0.5}}}/>
                        </div>
                        <div className="profile-information">
                            <img src="https://cdn.discordapp.com/avatars/618209006837825547/3b34d92bbf38407fbef9ee8361edfb04" alt="?"/>
                            <h3>soos#6008</h3>
                        </div>
                    </div>
                    <div className="advertisement">
                    </div>
                </div>
                <div className="secondary-content">
                    <div className="reminders">
                    </div>
                    <div className="latest-updates">
                    </div>
                </div>
            </div>
        </>
    );
}