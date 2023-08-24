import React from "react";
import "../Headers/new.scss";

export const Footer = () => {
  return (
    <footer
      id="bc"
      className="d-flex flex-row justify-content-between"
      style={{
        width: "100%",
        margin: "0%",
        color: "grey",
        backgroundColor: "rgb(36, 36, 42)",
        borderTop: "1px solid ",
      }}
    >
      <b>
        <div className="m-3" style={{ fontSize: "80%" }}>
          Copyright © 2019 &nbsp; Hodlinfo.com
        </div>
      </b>
      <div
        id="bc"
        className="bg-dark"
        style={{ position: "sticky", bottom: "0px", fontFamily: "sans-serif" }}
      >
        <button id="bc" className="btn btn-outline-info m-1">
          {" "}
          Add holinfo to home screen
        </button>
      </div>
      <div className="m-3" style={{ cursor: "pointer" }}>
        Support
      </div>
    </footer>
  );
};
