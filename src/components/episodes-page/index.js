import React from 'react';
import EpisodeCard from "../episode-card";
import './index.css';

const { google } = require('googleapis')     
const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes)

const view_id = 'UA-156433148-1' //Id of the webpage through analytics

async function getData() {
  const response = await jwt.authorize()

          //NUMBER OF PAGEVIEWS IN LAST 30 DAYS
  const result = await google.analytics('v3').data.ga.get({
    'auth': jwt,
    'ids': 'ga:' + view_id,
    'start-date': '30daysAgo', //defines the starting date for the report
    'end-date': 'today',       //tells the API what we want to get
    'metrics': 'ga:pageviews'  //tells the API what we want to get
  })
  console.dir(result)
}

getData()

function EpisodesPage(props) {
  return (
    <div className="episodes-page">
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
    </div>
  );
}

export default EpisodesPage;
