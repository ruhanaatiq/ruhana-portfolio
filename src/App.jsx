import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Hero from './components/Hero';
import { Toaster } from 'react-hot-toast';


function App() {
  return (
    <div className="bg-black text-base-content">
   
     
    <Toaster></Toaster>
<Navbar></Navbar>
      <main className="max-full mx-auto px-4 md:px-8 space-y-24">
<Hero></Hero>
<About></About>
<Skills></Skills>
<Experience></Experience>
<Education></Education>
<Projects></Projects>
<Contact></Contact>
</main>
    </div>
  );
}

export default App;