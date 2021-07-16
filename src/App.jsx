import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import api from './services/api'
import { HelloWorld } from './components/HelloWorld'

function App() {
  const [weather, setWeather] = useState(null)
  const city = "Curitiba"

  async function handleGetWeather() {
    const response = api.get(city)
    console.log(response.data)
    setWeather = response.data
  }

  return (
    <div className="App">
      <header>
        <button onClick={handleGetWeather}>enviar</button>
      </header>

      <main>
        {JSON.stringify(weather)}

        <h1>{city}</h1>

        <section>
          <h2>Current Weather</h2>
          <p>{weather.temperature}</p>
          <p>{weather.description}</p>
        </section>
      </main>
    </div>
  )
}

export default App
