import React from 'react';
import './index.css';

function EpisodeCard(props) {
  return (
    <div className="episode-card">
      <img src={props.imageUrl} alt={props.name} className="episode-image"/>
      <h5>{props.name}</h5>
      <p className="dark centered">{props.description}</p>
      <a href={props.link}>LEARN MORE</a>
    </div>
  );
}

export default EpisodeCard;
