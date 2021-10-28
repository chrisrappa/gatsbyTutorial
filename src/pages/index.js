import * as React from "react";
import Feature from "../components/Feature";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ImageGallery from "../components/ImageGallery";
import '../styles/global.css';



const IndexPage = () => {
  return (
    <main>

      <Header />
      <Hero 
      title = "We Build"
      img = "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80" 
      titleBlue = " Web Apps" 
      description = "Online Store, Information, Whatever You Need" 
      buttonOne = {true}
      buttonTwo = {true}/>

      <Feature />
      <ImageGallery />
      <Footer />
      
    </main>
  )
}

export default IndexPage
