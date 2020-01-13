import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from "./components/home-page";
import EpisodesPage from "./components/episodes-page";
import {slide as Menu} from 'react-burger-menu'
import NavigationMenu from "./components/navigation-menu";

const EPISODES = [
  {
    name: "DR. LIZ ARNOLD",
    description: "Learn more about Dr. Liz Arnold's industry experience and academic career in this episode of Office Hours.",
    link: "https://google.com",
    imageUrl: "https://ikarman4.github.io/LizArnold.jpg",
    longDescription: "Dr. Liz Arnold received her Ph.D. at the University of Texas at Austin. Throughout her career," +
      "she has done work for multiple notable pharmaceutical companies in New England such as Pfizer, Vertex, and Novartis." +
      "Currently, she works as a scientific-technical leader at the Novartis Institutes for Biomedical Research. In this episode, " +
      "Liz gives a thoughtful reflection on her undergraduate experience, and we explore the question “What do many students get " +
      "wrong about scientific work in pharmaceuticals and industry?”"
  },
  {
    name: "PH.D. CANDIDATE ZACH GARDNER",
    description: "Join us in hearing Zach's insight into graduate school along with his famous chili lime chicken recipe.",
    link: "https://google.com",
    imageUrl: "https://ikarman4.github.io/gardner.jpg",
    longDescription: "Zach Gardner is currently a graduate student at the Man Lab studying Autism Spectrum Disorder on the " +
      "cellular and molecular level. He got his BS in biological sciences in 2014 from Colorado Mesa University. In this episode, " +
      "we reflect on the graduate school process, discuss some bomb cooking recipes, and delve into the life of a " +
      "researcher in the city of Boston."
  },
  {
    name: "DR. KYLE GOBROGGE - A COMFORT IN NAIVETE, THE JOURNEY BEGINS",
    description: "Join us in hearing Zach's insight into graduate school along with his famous chili lime chicken recipe.",
    link: "https://google.com",
    imageUrl: "https://ikarman4.github.io/KyleBioPic-e1563549753639.png",
    longDescription: "In this episode of Office Hours, Ian and Ankur set up shop in the office of their 'Principles of" +
      " Neuroscience' lab professor Dr. Kyle Gobrogge. An excellent teacher and an expert in the field of neurobiology, " +
      "Dr. Gobrogge has won numerous awards for his work as an educator and researcher, including the 2008 K. Patricia " +
      "Cross Future Leaders Fellowship of the AAC&U. In this first episode, we cover various topics ranging from traits of " +
      "successful students in research to maintaining a work-life balance to the impact that policy can have on how research " +
      "is conducted."
  }
];


export default function App() {
  return (
    <div className="App">
        <Router>
          <Menu>
            <NavigationMenu/>
          </Menu>
          <Switch>
            <Route path="/episodes">
              <EpisodesPage episodes={EPISODES}/>
            </Route>
            {/* This * Always goes last! */}
            <Route path="*">
              <HomePage episodes={EPISODES}/>
            </Route>
          </Switch>
        </Router>

    </div>
  );
}
