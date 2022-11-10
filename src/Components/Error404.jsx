import React from "react";
import "../Styles/error404.css";
import {Link as LinkNav} from "react-router-dom";

export default function Error404() {
  return (
    <>
      <div className="Container">
        <div>
          <p> Here is the place for a Header</p>
        </div>
        <div className="mainbox">
          <div className="err">4</div>
          <p className="far">0</p>
          <div className="err2">4</div>
          <div className="msg">
            Maybe this page moved? <br /> Got deleted? <br /> Is hiding out in
            quarantine? <br /> Never existed in the first place? <br /> Try
            Again{" "}
          </div>
          <div className="msg1">
            {" "}
            <LinkNav className="Home-btn" to={`/`}> Home</LinkNav>
          </div>
        </div>
      </div>
    </>
  );
}
