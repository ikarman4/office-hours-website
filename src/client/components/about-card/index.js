import React from 'react';

import './index.css';


function AboutCard(props) {
    return (
      <div className="about-card">
        <p className="dark centered description">{props.Description}</p>
        <a className="about-card-button" href={props.link}>Business Card</a>
      </div>
    )
  }

  