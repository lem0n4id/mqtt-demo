// import { useState } from 'react'
import './App.css'
import Nav from './Nav'
import LeftSection from './LeftSection'
import RightSection from './RightSection'

export default function App() {
  return (
    <main>
      <Nav />
      <div className='flex flex-row'>
        <LeftSection />
        <RightSection />
      </div>
      
    </main>
  )
}