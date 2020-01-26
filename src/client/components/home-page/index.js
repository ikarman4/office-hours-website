import WhatsThis from "../whats-this";
import RecentEpisodes from "../recent-episodes";
import React from "react";

// const { google } = require('googleapis')     
// const scopes = 'https://www.googleapis.com/auth/analytics.readonly'
// const jwt = new google.auth.JWT(process.env.CLIENT_EMAIL, null, process.env.PRIVATE_KEY, scopes)

// const view_id = 'UA-156433148-1' //Id of the webpage through analytics

// async function getData() {
//   const response = await jwt.authorize()

//           //NUMBER OF PAGEVIEWS IN LAST 30 DAYS
//   const result = await google.analytics('v3').data.ga.get({
//     'auth': jwt,
//     'ids': 'ga:' + view_id,
//     'start-date': '30daysAgo', //defines the starting date for the report
//     'end-date': 'today',       //tells the API what we want to get
//     'metrics': 'ga:pageviews'  //tells the API what we want to get
//   })
//   console.dir(result)
// }

// getData()


export default function HomePage(props) {
  return (
    <div>
      <WhatsThis/>
      <RecentEpisodes episodes={props.episodes}/>
    </div>
  );
}