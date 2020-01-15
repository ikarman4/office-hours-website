import Header from "../header";
import WhatsThis from "../whats-this";
import RecentEpisodes from "../recent-episodes";
import Footer from "../footer";
import React from "react";

export default function HomePage(props) {
  return (
    <div>
      <Header/>
      <WhatsThis/>
      <RecentEpisodes episodes={props.episodes}/>
      <Footer/>
    </div>
  );
}