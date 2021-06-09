import React from 'react';

import "./dashNav.css";

const dashNav = () => {
  const currency = "KES, NGN, GHC".split(',');
    return (
      <>
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
          <img className="avatar"src="/images/image.svg" alt="avat"  />
          </div>
        </div>
      </nav>
      
      <div className="tableBalWrap">
        <div className="tableBal">
          <p className="total">Total account balance</p>
          <select name="amount" className="amount">
           <option value="USD">USD</option>
           <option value="NGN">NGN</option>
           <option value="NGN">GHC</option>
           <option value="KES">KES</option>
          </select>
        </div>
        <span className="line">
          <h1 className="line">$5,332.18</h1>
          <p className="conversion">1USD = 381.79NGN</p>
         
        </span>
        <div className="curwrap">
        {currency.map((value, currencyIndex) => (
        <span
          key={`dash-tab_value-${currencyIndex}`}
          className="currency"
        >
          {value}
        </span>
      ))}
      </div>

      </div>
      <div className="funds">
        <p className="action">Funds on hold</p>
        <h1 className="figure">$5,332.18</h1>
      </div>
      </>
    );
  };
  
  export default dashNav;
  