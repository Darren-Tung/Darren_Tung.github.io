import React, { Component } from 'react';
import './App.css';
import Header from './components/header/Header';
import Home from './components/home/Home';
import About from './components/about/About';
import Skills from './components/skills/Skills';
import Qualification from './components/qualification/Qualification';
import Contact from './components/contact/Contact';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
    <Header />

    <main className ='main'>
      <Home />
      <About />
      <Skills />
      <Qualification />
      <Contact />
      <Footer />
    </main>
    </>
  );
}

export default App;
