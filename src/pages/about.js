
import * as React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import '../styles/global.css';

function about() {
  return (
    <div>
      <main>

      <Header />
      <Hero 
        title = "Learn More" 
        titleBlue = "About Us" 
        description = "There's more than meets the eye" 
        buttonOne = {false}
        buttonTwo = {false} />
      <Feature />
      <Footer />

      </main>
    </div>
  )
}

export default about
