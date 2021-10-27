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
        <Hero description = "This is the contact page" />
        <Feature />
        <Footer />

        </main>
    </div>
  )
}

export default contact
