import Settings from "./settings/Settings";
import {useState} from "react";
import settings_icon from '../icons/settings_icon.svg'
import search_icon from '../icons/search.svg'
import { Tooltip, Fade } from "@mui/material";


export default function Sidebar(){
    const [settingsShown, setSettingsShown] = useState(false);
    const server_icon = "https://cdn.discordapp.com/icons/336642139381301249/3aa641b21acded468308a37eef43d7b3.webp?size=1024"

    return (
        <>
            <Settings shown={settingsShown} setShown={setSettingsShown} key="hi"/>



            <div className="sidebar">
                <div className="profile">
                    <Tooltip title={<h2 className="tooltip-text">Home</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                        <img src="https://cdn.discordapp.com/avatars/618209006837825547/3b34d92bbf38407fbef9ee8361edfb04" alt="?"/>
                    </Tooltip>
                </div>

                <button className="search-button">
                    <img src={search_icon} alt="SETTINGS"/>
                </button>

                <div className="top-seperator"/>
                <div className="servers">
                    <div className="server">
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>

                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>

                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>

                    <div className="server">
                        <Tooltip title={<h2 className="tooltip-text">discord.py</h2>} placement="right" arrow TransitionComponent={Fade} TransitionProps={{ timeout: 250 }} sx={{backgroundColor: "red"}}>
                            <img src={server_icon} alt="?"/>
                        </Tooltip>
                    </div>
                </div>
                <div className="bottom-seperator"/>

                <button className="settings-button" onClick={() => setSettingsShown(!settingsShown)}>
                    <img src={settings_icon} alt="SETTINGS"/>
                </button>
            </div>
        </>
    )
}