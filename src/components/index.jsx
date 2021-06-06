import React from 'react';

import "./dashNav.css";

const dashNav = () => {
    return (
      <nav className="dashNav">
        <div className="wrap">
          <h2 className="balance">Balances</h2>
          <span className="date">Today, 19 october 2020</span>
        </div>
       
        {/* <span className="flex-grow" /> */}

        <div className="wrapp">
        <div className="bellBox">
          <img className="bell" src="/images/notification.png" alt="Bell" />
          {/* <span className="bg-red-600 text-white rounded-full h-6 w-6 absolute top-0 right-0 -mt-3 -mr-3 flex items-center justify-center">
            4
          </span> */}
        </div>
  
        <div className="avatarBox">
          <img className="avatar"src="/images/avatar.png" alt="avat"  />
          </div>
        </div>
      </nav>
    );
  };
  
  export default dashNav;
  