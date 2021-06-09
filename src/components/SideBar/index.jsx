import React from "react";
import "./sideBar.css";

const sideBar = () => {
  return (
    <>
      <div className="sideBar">
        <img className="logo" src="/images/logo.svg" alt="logo" />
        <p>Main pages</p>
        <div className="dash">
          <img className="icon" src="/images/Category.svg" alt="dash" />
          <span className="space">Dashboard</span>
        </div>
      </div>
    </>
  );
};

export default sideBar;
