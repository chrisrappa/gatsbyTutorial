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
      <Hero description = "This is the products page" />
      <Feature />
      <Footer />

      </main>
    </div>
  )
}

export default products
