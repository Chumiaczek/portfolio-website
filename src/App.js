import React from 'react';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom'
import PreLoader from './components/PreLoader';

function App() {
  return (
    <Router>
      <PreLoader />
    </Router>
  );
}

export default App;
