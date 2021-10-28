import * as React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import '../styles/global.css';

function contact() {
  return (
    <div>
      <main>

        <Header />
        <Hero 
        title = "Feel Free To" 
        titleBlue = "Reach Out!" 
        description = "We want to help so let us know how we can improve your experience" 
        buttonOne = {true}
        buttonTwo = {false} />
        <Feature />
        <Footer />

        </main>
    </div>
  )
}

export default contact
