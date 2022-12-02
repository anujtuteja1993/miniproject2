import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import { AppRoutes } from "./routes/routes";
import Recommended from './components/Recommended/Recommended';
import Genre from './components/Genre/Genre';
import Navbar from './components/Navbar/Navbar'

function App() {
  
  return (
      <>
      <Navbar />
      <div className="App">
        <AppRoutes />
      </div>
      </>
  );
}

export default App;



