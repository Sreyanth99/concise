import React from 'react'
import Hero from './components/Hero'
import Demo from './components/demo'
import Footer from './components/Footer'
import './App.css'


const app = () => {
  return (
    <main>
      <div className='main'>
        <div className='gradient'/>
      </div>

      <div className='app'>
        <Hero/>
        <Demo/>
        <Footer/>
      </div>
    </main>
  )
}

export default app