import React from 'react';
import './Sidebar.css';
import { assets } from '../../assets/assets';

const Sidebar = () => {
  return (
    <div className='sidebar w-1/9'> 
        <div className="top">
            <img className='menu' src={assets.menu_icon} alt="Menu" />
            <div className="new-chat">
                <img src={assets.plus_icon} alt="New Chat" />
            </div>
        </div>
        
        <div className="mid">
          <a href='/student-list' className="recent-entry">
            <img src={assets.admin_icon} alt="Message" />
            <p>Students</p>
          </a>
          <a href='/teacher-list' className="recent-entry">
            <img src={assets.message_icon} alt="Message" />
            <p>Teachers</p>
          </a>
          <div className="recent-entry">
            <img src={assets.manageuser_icon} alt="Message" />
            <p>Manage<br/>Users</p>
          </div>
          <a href='/' className="recent-entry">
            
            <img src={assets.logout_icon} alt="Message" />
            <p>Logout</p>
          </a>
        </div>

      <div className="bottom">
        <a href='/setting' className="bottom-item recent-entry">
          <img src={assets.settings_icon} alt="Settings" />
          <p>Settings</p>
        </a>
      </div>
    </div>
  );
};

export default Sidebar; 