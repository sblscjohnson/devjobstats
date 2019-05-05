import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom'
import routes from './routes'

import Navbar from './Components/Navbar/Navbar'

import './App.css';

function App() {
  return (
    <div className="App-parent">
      <Router>
        <Navbar />
        { routes }
      </Router>
    </div>
  );
}

export default App;
