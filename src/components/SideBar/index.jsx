import React from "react";
import "./sideBar.css";

const sideBar = () => {
  return (
    <>
      <div className="sideBar">
        <img className="logo" src="/images/logo.svg" alt="logo" />
        <p>Main pages</p>
        <div className="dash flex">
          <img className="icon" src="/images/Category.svg" alt="dash" />
          <span className="space">Dashboard</span>
        </div>

        <div className="wallet flex">
          <img className="icon" src="/images/Wallet.svg" alt="wallet" />
          <span className="space">Balances</span>
        </div>

        <div className="customer flex">
          <img className="icon" src="/images/3 User.svg" alt="user" />
          <span className="space">Customer</span>
        </div>

        <div className="act flex">
          <img className="icon" src="/images/Activity.svg" alt="act" />
          <span className="space">Analytics</span>
        </div>

        <p>General</p>

        <div className="setting flex">
          <img className="icon" src="/images/Filter.svg" alt="setting" />
          <span className="space">Settings</span>
        </div>

        <div className="team flex">
          <img className="icon" src="/images/Star.svg" alt="team" />
          <span className="space">Team</span>
        </div>

        <div className="contact flex">
          <img className="icon" src="/images/Call.svg" alt="contact" />
          <span className="space">Contact</span>
        </div>

        <div className="log flex">
          <img className="icon" src="/images/Logout.svg" alt="log" />
          <span className="space">Logout</span>
        </div>
      </div>
    </>
  );
};

export default sideBar;
