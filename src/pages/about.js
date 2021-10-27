
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
      <Hero descriptions = "This is the about page" />
      <Feature />
      <Footer />

      </main>
    </div>
  )
}

export default about
