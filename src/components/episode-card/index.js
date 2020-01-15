import React from 'react';
import './index.css';
import {Link} from "react-router-dom";

function EpisodeCard(props) {
    if (props.short) {
      return ShortEpisodeCard(props.episode);
    } else if (props.full) {
      return FullEpisodeCard(props.episode);
    }
}

function ShortEpisodeCard(props) {
  return (
    <div className="episode-card">
      <img src={props.imageUrl} alt={props.name} className="episode-image"/>
      <h5 className={"dark centered"}>{props.name}</h5>
      <p className="dark centered">{props.description}</p>
      <Link to={"/episodes"} className="dark">LEARN MORE</Link>
    </div>
  )
}

function FullEpisodeCard(props) {
  return (
    <div className="episode-card">
      <img src={props.imageUrl} alt={props.name} className="episode-image"/>
      <h5 className={"dark centered"}>{props.name}</h5>
      <p className="dark centered long-description">{props.longDescription}</p>
      <a className="episode-card-listen-button" href={props.link}>LISTEN</a>
    </div>
  )
}

export default EpisodeCard;
