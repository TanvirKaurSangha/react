import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.css';

import Home from './pages/home/home'
import Login from './pages/login/login'
import Register from './pages/register/register'
import Detail from './pages/detail/detail';


function App() {
  return (
    <div className="App">

          <Router>
                <Routes>
                <Route exact path="/" element={<Home/>}/>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/register" element={<Register/>}/>
                <Route exact path="/detail" element={<Detail/>}/>
                </Routes>
            </Router>
    </div>
  );
}

export default App;
