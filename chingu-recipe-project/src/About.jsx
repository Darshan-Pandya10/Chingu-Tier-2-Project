import React, { useState } from 'react'
import './App.css'
import dataAbout from './DataAbout';
import QnACard from './QnACard';
import {v4 as uuidv4} from 'uuid';
function About() {

  return (
    <main className='about'>
      <h1 className='heading'>About</h1>
      <p className='description'>Here you can find FAQs about the page.</p>

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
