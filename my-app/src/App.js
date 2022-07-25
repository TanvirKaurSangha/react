import logo from './logo.svg'
import './App.css'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css'

import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Detail from './pages/detail/detail'
import Post from './pages/post/post'
import About from './pages/about/about'
import Review from './pages/review/review'

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/detail" element={<Detail />} />
          <Route exact path="/posts" element={<Post />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/review" element={<Review />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
