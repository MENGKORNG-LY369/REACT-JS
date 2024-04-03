import React from 'react';
import Header from './components/templates/Header';
import Home from './pages/Home';
import About from './pages/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';
import Footer from './components/templates/Footer';

export default function App() {
  return (
  <div className='bg-slate-900 text-white p-0 min-h-screen flex flex-col justify-between'>
    <Router>
      <Header />
      <div className='container px-10 py-3'>
        <Routes>
          <Route index path='/' element= {<Home />} />
          <Route path='/about' element= {<About />} />
          <Route path='/signin' element= {<SignIn />} />
          <Route path='/contact' element= {<Contact />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  </div>
  )
}
