import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  function handlePlus() {
    if (count == 33) {
      setCount(0)
    }
    setCount(prev=>prev+1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <main>
      <div className='maspaha'>
        <h1>
          مسبحة : {count}
        </h1>

        <div className='btn'>
          <button className='btn1' onClick={handlePlus}>
            +1
          </button>

          <button className='reset' onClick={reset}>
            Reset
          </button>
        </div>
      </div>
    </main>
  )
}

export default App
