import React from 'react';
import './index.css';
import EpisodeCard from "../episode-card";

function RecentEpisodes(props) {
  return (
    <div className="recent-episodes">
      <h2 className="dark">LATEST EPISODES</h2>
      <div className="recent-episodes-list">
        {props.episodes.map((episode, index) => {
          return (
            <div key={index+"episode"}>
              EpisodeCard(episode)
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
