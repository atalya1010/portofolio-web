import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Organization from './components/Organization';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Organization />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
