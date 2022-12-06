import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
import { Routes } from 'react-router-dom'
import { AppRoutes } from "./routes/routes";
import Recommended from './components/Recommended/Recommended';
import Genre from './components/Genre/Genre';
import Navbar from './components/Navbar/Navbar'
import {useState} from 'react'

function App() {
  const [gameResults, setGameResults] = useState([]) //by lifting state up to here, we can reuse it across multiple child components
  
  return (
      <>
      <Navbar resultsHandler={setGameResults} />
      <div className="App">
        <AppRoutes gameResults={gameResults} />
      </div>
      </>
  );
}

export default App;



