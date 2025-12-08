import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const handleUnmute = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement
    if (audio) {
      audio.muted = false
      audio.play()
    }
  }

  return (
    <div className="App">
      <div className="intro">
        <h1>A memory is required for entry.</h1>
        <h1>Which will you forget?</h1>
        <button className='startbutton' onClick={handleUnmute}>Start</button>
      </div>
    </div>
  )
}

export default App
