import React, { useEffect } from 'react';

import AOS from 'aos';
import 'aos/dist/aos.css';

import './App.css'

import Header from './components/Header/Header';
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Services from './components/Services/Services';
import Qualification from './components/Qualification/Qualification';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import ScrollUp from './components/ScrollUp/ScrollUp';
import Portfolio from './components/Projects/Portfolio';

function App() {

  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);

  return (
    <>
      <Header />
      <main className='main'>
        <div data-aos="fade-up" data-aos-duration="2000"><Home /></div>
        <div data-aos="fade-up" data-aos-duration="2000"><About /></div>
        <div data-aos="fade-up" data-aos-duration="2000"><Skills /></div>
        <div data-aos="fade-up" data-aos-duration="2000"><Services /></div>
        <div data-aos="fade-up" data-aos-duration="2000"><Qualification /></div>
        <div data-aos="zoom-in-up" data-aos-duration="2000"><Portfolio /></div>
        <div data-aos="zoom-in-up" data-aos-duration="3000"><Contact /></div>
      </main>
      <Footer />
      <ScrollUp />
    </>
  )
}

export default App