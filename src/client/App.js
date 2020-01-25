import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import HomePage from "./client/components/home-page/index.js";
import EpisodesPage from "./client/components/episodes-page/index.js";
import {slide as Menu} from 'react-burger-menu'
import NavigationMenu from "./client/components/navigation-menu/index.js";
import Footer from './client/components/footer';
import Header from "./client/components/header";
import AboutUs from "./client/components/about-us";

const EPISODES = [

  {
    name: "DR. LIZ ARNOLD",
    description: "Learn more about Dr. Liz Arnold's industry experience and academic career in this episode of Office Hours.",
    link: "https://drive.google.com/open?id=1Wtot-ZFAf1qys_8HgTCGWisydEYHtTh3",
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
    link: "https://drive.google.com/open?id=1gwr3buSEdCGo_o295YzB3GTUH4BkZP-p",
    imageUrl: "https://ikarman4.github.io/KyleBioPic-e1563549753639.png",
    longDescription: "In this episode of Office Hours, Ian and Ankur set up shop in the office of their 'Principles of" +
      " Neuroscience' lab professor Dr. Kyle Gobrogge. An excellent teacher and an expert in the field of neurobiology, " +
      "Dr. Gobrogge has won numerous awards for his work as an educator and researcher, including the 2008 K. Patricia " +
      "Cross Future Leaders Fellowship of the AAC&U. In this first episode, we cover various topics ranging from traits of " +
      "successful students in research to maintaining a work-life balance to the impact that policy can have on how research " +
      "is conducted."
  },
  {
    name: "ARE WE DOING THIS RIGHT?",
    description: "Ian and Ankur attempt to put into words the creation of this podcast and what they have planned for it.",
    link: "https://drive.google.com/open?id=1Q9iV4LfvGbpAJNpoyJ5_fCJInEsheS98",
    imageUrl: "https://ikarman4.github.io/podcast-artwork.PNG",
    longDescription: "Ian and Ankur attempt to put into words the creation of this podcast and what they have planned for it."
  }

];


export default function App() {
  return (
    <div className="App">
        <Router>
          <Menu>
            <NavigationMenu/>
          </Menu>
          <Header/>
          <Switch>
            <Route path="/episodes">
              <EpisodesPage episodes={EPISODES}/>
            </Route>
            <Route path={"/about-us"} >
              <AboutUs/>
            </Route>
            {/* This * Always goes last! */}
            <Route path="*">
              <HomePage episodes={EPISODES}/>
            </Route>
          </Switch>
          <Footer/>
        </Router>

    </div>
  );
}
