import React, { useState } from 'react'
import './App.css'
import dataAbout from './DataAbout';
import QnACard from './QnACard';
import {v4 as uuidv4} from 'uuid';
import Footer from './Footer';
function About() {

  return (
    <main className='about w-full h-auto mt-[1rem] p-4 relative'>
      <h1 className='heading md:tracking-widest mb-1 text-4xl px-2'>About</h1>
      <p className='description px-2'>Here you can find FAQs about the page.</p>

      {/* map through array of FAQS */}
      {dataAbout.map(data => {
        const id = uuidv4()
        return <QnACard 
        key={id}
        data={data}
        />
      })}
    </main>
   
  )
}

export default About
