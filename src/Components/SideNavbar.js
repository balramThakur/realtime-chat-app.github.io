import React from 'react';
import './SideNavbar.css';
import Avatar from '@mui/material/Avatar';

const SideNaveChatroom = {
    color: "white",
    display: "flex",
    alignItems: "center"
}

const SideNavbar = () => {
    return (
        <div>
            <div className="SideNavbar">
                <div className="SideNav-header">
                    <Avatar alt="Remy Sharp" />
                </div>

                <div className="SideNav-chat">
                    <div className="SideNave-chatroom" style={SideNaveChatroom} >
                        <Avatar alt="Remy Sharp" />
                        <p className='room-name'>Balram</p>
                    </div>
                    <div style={{
                        position: "relative", left: "52px",top: "-15px"
                    }}>
                        <p>Last Message...</p>
                    </div>
                </div>
                <div className="SideNav-chat">
                    <div className="SideNave-chatroom" style={SideNaveChatroom} >
                        <Avatar alt="Remy Sharp" />
                        <p className='room-name'>Balram</p>
                    </div>
                    <div style={{
                        position: "relative", left: "52px",top: "-15px"
                    }}>
                        <p>Last Message...</p>
                    </div>
                </div>
                <div className="SideNav-chat">
                    <div className="SideNave-chatroom" style={SideNaveChatroom} >
                        <Avatar alt="Remy Sharp" />
                        <p className='room-name'>Balram</p>
                    </div>
                    <div style={{
                        position: "relative", left: "52px",top: "-15px"
                    }}>
                        <p>Last Message...</p>
                    </div>
                </div>
                <div className="SideNav-chat">
                    <div className="SideNave-chatroom" style={SideNaveChatroom} >
                        <Avatar alt="Remy Sharp" />
                        <p className='room-name'>Balram</p>
                    </div>
                    <div style={{
                        position: "relative", left: "52px", top: "-15px"
                    }}>
                        <p>Last Message...</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideNavbar
