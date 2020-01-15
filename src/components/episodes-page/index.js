import React from 'react';
import EpisodeCard from "../episode-card";
import Header from "../header";
import './index.css';
import Footer from "../footer";

function EpisodesPage(props) {
  return (
    <div className="episodes-page">
      <Header/>
      <div className="episodes-page-content">
        <h2 className="dark">EPISODES</h2>
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
      <Footer/>
    </div>
  );
}

export default EpisodesPage;
