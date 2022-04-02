import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Switch, Route, Link, Routes} from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import { StaticRouter } from "react-router-dom/server";
import './index.css';
import App from './App';
import Home from './Home';
import Atm from './ATM';
const reload = () => window.location.reload();
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/explore" element={<App />} />
        
              </Routes>
    </Router>
   
  
  </React.StrictMode>,
  document.getElementById('root')
);

