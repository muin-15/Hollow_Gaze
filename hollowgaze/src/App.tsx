
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const navigate = useNavigate();

  const handleUnmute = () => {
    const audio = document.getElementById('bg-music') as HTMLAudioElement | null
    if (audio) {
      audio.muted = false
      audio.play()
    }
    console.log('The game is starting...')
    navigate('/starting');
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
