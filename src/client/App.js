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
import Footer from './components/footer';
import Header from "./components/header";
import AboutUs from "./components/about-us";

const EPISODES = [

  {
    name: "DR. JEFFREY GAVORNIK",
    description: "In this episode of Office Hours with Dr. Jeffrey Gavornik: MIT and The International Space Station, limitations of biology in studying the brain, and a recipe for some mean Austin Chili.",
    link: "http://smarturl.it/h0zigc",
    imageUrl: "https://office-hours-pod.s3.us-east-2.amazonaws.com/Gavornik-1-636x636.jpg",
    longDescription: "Dr. Jeffrey Gavornik is an assistant professor of neuroscience and neurobiology at Boston University. Graduating with a double major in electrical engineering and history from Rice, Dr. Gavornik went on to work with NASA and Boeing well before he had the chance to fall in love with neuroscience. After a stint at Mark Bear’s lab at MIT, he came to BU, looking to understand how synaptic plasticity in the cortex gives rise to higher level cognition. In this episode of Office Hours, we talk about his work experiences at Boeing and the international space station, limitations of biology in studying the brain, and a recipe for some mean Austin Chili."
  },

  {
    name: "PH.D CANDIDATE JORDAN HARROD",
    description: "Today on Office Hours: turning passions and ideas into projects, misconceptions about artificial intelligence, and living life in controlled chaos.",
    link: "http://smarturl.it/h0zigc",
    imageUrl: "https://office-hours-pod.s3.us-east-2.amazonaws.com/jordan.jpeg",
    longDescription: "Jordan Harrod is a Ph.D. Student in the Harvard-MIT Health Sciences and Technology program under Dr. Ed Boyden and Dr. Emery Brown. Combining interests in neuroengineering and AI, her research aims to use brain stimulation technology to understand clinical pain and anesthesia. When Jordan isn’t in lab you can find her all over Boston either training for the Spartan Race, recording videos for her youtube channel, or writing for Science in the News. In this episode of Office Hours we talk about turning passions and ideas into projects, misconceptions about artificial intelligence, and living life in controlled chaos."
  },

  {
      name: "PH.D CANDIDATE JENNY VOJTECH",
      description: "The niche field of speech science as well as stories and lessons from her clinical work at the Stepp Lab, Jenny Vojtech today on Office Hours.",
      link: "http://smarturl.it/h0zigc",
      imageUrl: "https://office-hours-pod.s3.us-east-2.amazonaws.com/jenny-vojtech.jpg",
      longDescription: "Jenny Vojtech is a graduate student in the STEPP Lab for Sensorimotor " +
      "Rehabilitation Engineering, where she develops quantitative methods for clinical voice assessment. " +
      "She received her BS in bioengineering from the University of Maryland in 2015, and her MS in biomedical " +
      "engineering from Boston University in 2018. She is currently pursuing a PhD in Biomedical Engineering " +
      "from Boston University. Her current research interests involve developing computational methods to " +
      "improve the clinical assessment of voice disorders and applying quantitative techniques to enhance " +
      "augmentative and alternative communication (AAC) device access."
    },

  {
    name: "DR. LIZ ARNOLD",
    description: "Today on Office Hours we discuss Dr. Liz Arnold's unique perspective working in both industry and academia, and a reflection on the current undergraduate experience in STEM.",
    link: "http://smarturl.it/h0zigc",
    imageUrl: "https://ikarman4.github.io/LizArnold.jpg",
    longDescription: "Dr. Liz Arnold received her Ph.D. at the University of Texas at Austin. Throughout her career," +
      "she has done work for multiple notable pharmaceutical companies in New England such as Pfizer, Vertex, and Novartis." +
      "Currently, she works as a scientific-technical leader at the Novartis Institutes for Biomedical Research. In this episode, " +
      "Liz gives a thoughtful reflection on her undergraduate experience, and we explore the question “What do many students get " +
      "wrong about scientific work in pharmaceuticals and industry?”"
  },
  // {
  //   name: "PH.D. CANDIDATE ZACH GARDNER",
  //   description: "Join us in hearing Zach's insight into graduate school along with his famous chili lime chicken recipe.",
  //   link: "http://smarturl.it/h0zigc",
  //   imageUrl: "https://ikarman4.github.io/gardner.jpg",
  //   longDescription: "Zach Gardner is currently a graduate student at the Man Lab studying Autism Spectrum Disorder on the " +
  //     "cellular and molecular level. He got his BS in biological sciences in 2014 from Colorado Mesa University. In this episode, " +
  //     "we reflect on the graduate school process, discuss some bomb cooking recipes, and delve into the life of a " +
  //     "researcher in the city of Boston."
  // },

  {
    name: "DR. KYLE GOBROGGE - A COMFORT IN NAIVETE, THE JOURNEY BEGINS",
    description: "Politics in science, traits of successful students, work life balance, all covered in this episode of Office Hours",
    link: "http://smarturl.it/h0zigc",
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
    link: "http://smarturl.it/h0zigc",
    imageUrl: "https://ikarman4.github.io/podcast-artwork.png",
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
