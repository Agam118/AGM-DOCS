import React from 'react'
import './App.css';
import Cards from './components/Cards';
import Background from './components/Background.js';
import Ground from './components/Ground.js';


const App = () => {
  return (
    <>
    <div className="relative h-screen w-full bg-zinc-800 " >
       <Background />
       <Ground />
    </div>
    
    </>
  )
}

export default App