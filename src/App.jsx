import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './Home'
import About from './About'

import './App.css'

function App() {

  return (
    <BrowserRouter>
      <nav>
        <Link className="link" to="/">Home</Link>
        <Link className="link" to="/about">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
