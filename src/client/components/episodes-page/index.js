import React from 'react';
import EpisodeCard from "../episode-card";
import './index.css';

function EpisodesPage(props) {
  return (
    <div className="episodes-page">
      <div className="episodes-page-content">
        <h2 className="dark">EPISODES</h2>
        <iframe title="Spotify" src="https://open.spotify.com/embed-podcast/episode/1jPypjV2CjbtjmQONS4fwx" width="100%" height="232" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
        <div className="episodes-list">
          {props.episodes.map((episode) => {
            return (
              <div key={episode.name}>
                <EpisodeCard episode={episode} full/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default EpisodesPage;
