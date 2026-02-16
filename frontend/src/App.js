import React from 'react';
import './App.css';
import './responsive.css';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Veterinarians from './components/Veterinarians';
import Services from './components/Services';
import Reviews from './components/Reviews';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Hero />
      <About />
      <Veterinarians />
      <Services />
      <Reviews />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
