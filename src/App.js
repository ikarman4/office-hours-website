import React from 'react';
import Header from "./components/header"
import WhatsThis from "./components/whats-this";
import RecentEpisodes from "./components/recent-episodes";
import Footer from "./components/footer";
import './App.css';

const EPISODES = [
    {
        name: "DR. LIZ ARNOLD",
        description: "Learn more about Dr. Liz Arnold's industry experience and academic career in this episode of Office Hours.",
        link: "https://google.com",
        imageUrl: "https://ikarman4.github.io/LizArnold.jpg"
    },
    {
        name: "PH.D. CANDIDATE ZACH GARDNER",
        description: "Join us in hearing Zach's insight into graduate school along with his famous chili lime chicken recipe.",
        link: "https://google.com",
        imageUrl: "https://ikarman4.github.io/gardner.jpg"
    }
];

function App() {
  return (
    <div className="App">
      <Header/>
      <WhatsThis/>
      <RecentEpisodes episodes={EPISODES}/>
      <Footer/>
    </div>
  );
}

export default App;
