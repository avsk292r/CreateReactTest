import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom'
import React from 'react'
import Home from './Home'

//Der er sat router op med v6 og vite er installeret

function App() {
  return (
<Router>
      <div className="App">
        <div className="content">
          <nav>
            <Link to="/">Home</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App