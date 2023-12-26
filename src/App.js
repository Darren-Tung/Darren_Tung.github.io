import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';
import Scroll from './components/scroll/Scroll';

function App() {
  return (
    <>
    <Header />

    <main className ='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Work />
      <Contact />
      
    </main>
    <Footer />
    <Scroll />
    </>
  );
}

export default App;
