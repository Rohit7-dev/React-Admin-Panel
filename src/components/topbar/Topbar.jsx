import { Language, NotificationsNone, Settings } from '@material-ui/icons'
import React from 'react'
import './topbar.css'

const Topbar = () => {
    return (
        <div className="topbar">
            <div className="topbarWrapper">
                <div className="topLeft">
                    <span className="logo">Admin-e</span>
                </div>
                <div className="topRight">
                    <div className="topbarIconContainer">
                       <NotificationsNone />
                       <span className="topIconBadge">7</span>
                    </div>
                    <div className="topbarIconContainer">
                       <Language />
                       <span className="topIconBadge">7</span>
                    </div>
                    <div className="topbarIconContainer">
                       <Settings /> 
                    </div>
                    <img className="topAvatar" src="https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Topbar
