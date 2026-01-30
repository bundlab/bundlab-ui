import React from 'react'
import WelcomeDashboard from './WelcomeDashboard' // The component we wrote earlier
import './App.css'

function App() {
  return (
    <div className="App">
      {/* This renders your bundlab pulse dashboard */}
      <WelcomeDashboard />
    </div>
  )
}

export default App