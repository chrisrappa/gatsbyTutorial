import * as React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import '../styles/global.css';

function products() {
  return (
    <div>
      <main>

      <Header />
      <Hero 
        title = "We Have Something" 
        titleBlue = "To Fit You" 
        description = "Whatever your needs may be, we have an option that can meet them." 
        buttonOne = {false}
        buttonTwo = {false} />
      <Feature />
      <Footer />

      </main>
    </div>
  )
}

export default products
