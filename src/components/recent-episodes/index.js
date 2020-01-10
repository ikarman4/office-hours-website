import React from 'react';
import EpisodeCard from "../episode-card";
import './index.css';

function RecentEpisodes(props) {
  return (
    <div className="recent-episodes">
      <h2 className="dark">LATEST EPISODES</h2>
      <div className="recent-episodes-list">
        {props.episodes.map((episode) => {
          return (
            <div key={episode.name}>
              {EpisodeCard(episode)}
            </div>
          )
        })}
      </div>
        <button className="browse-button">
          Browse All
        </button>
    </div>
  );
}

export default RecentEpisodes;
