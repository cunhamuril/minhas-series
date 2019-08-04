import React from 'react';

import './App.css'

import Header from '../components/template/Header'
import Routes from './Routes'
import Footer from '../components/template/Footer'

import { BrowserRouter } from 'react-router-dom'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes />
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
