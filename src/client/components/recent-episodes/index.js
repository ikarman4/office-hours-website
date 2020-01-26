import React from 'react';
import EpisodeCard from "../episode-card";
import './index.css';
import {Link} from "react-router-dom";

function RecentEpisodes(props) {
  // show two most recent episodes
  let recentEpisodes = props.episodes.slice(0, 2);
  return (
    <div className="recent-episodes">
      <h2 className="dark">LATEST EPISODES</h2>
      <div className="recent-episodes-list">
        {recentEpisodes.map((episode) => {
          return (
            <div key={episode.name}>
              <EpisodeCard episode={episode} short/>
            </div>
          )
        })}
      </div>
      <Link to={"/episodes"}>
        <button className="browse-button">
          Browse All
        </button>
      </Link>
    </div>
  );
}

export default RecentEpisodes;
