import css from "../css/styles.css";  
import React from 'react';
import Title from "./Title";
import Navigation from "./Navigation";
import Introduction from "./Introduction/Introduction"
import About from "./About/About";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "./Footer";

export default function App() {
  return (
    <div id="App" className="App">
       <Title/>
       <Navigation/>
       <Introduction/>
       <About/>
       <Portfolio/>
       <Footer/>
    </div>
  )
} 