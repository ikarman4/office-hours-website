import React from "react";
import {Link} from "react-router-dom";
import "./index.css";

export default function NavigationMenu() {
  return (
    <div className="bm-item-list">
        <Link to={"/home"} className="bm-item">Home</Link>
        <Link to={"/episodes"} className="bm-item">Episodes</Link>
    </div>
  );
}