import WhatsThis from "../whats-this";
import RecentEpisodes from "../recent-episodes";
import React from "react";

export default function HomePage(props) {
  return (
    <div>
      <WhatsThis/>
      <RecentEpisodes episodes={props.episodes}/>
    </div>
  );
}