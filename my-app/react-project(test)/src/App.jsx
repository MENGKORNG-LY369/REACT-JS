import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';

export default function App() {
  return (
  <div className='bg-slate-900 text-white p-0'>
    <Router>
      <Header />
      <Routes>
        <Route index path='/' element= {<Home />} />
        <Route path='/about' element= {<About />} />
        <Route path='/signIn' element= {<SignIn />} />
      </Routes>
    </Router>
  </div>
  )
}
