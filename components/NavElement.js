"use client";

import React from "react";

function Nav(props) {
  return (
    <div style={{ margin: "10px" }}>


      <button onClick={() => props.setFilter("UPM (REG)")}>dog</button>
      <button onClick={() => props.setFilter("UPM individual")}>cat</button>
      <button onClick={() => props.setFilter("other REG projects")}>lizard</button>
    </div>
  );
}

export default Nav;
