// import logo from './logo.svg';
import React, {useState} from 'react'
import './App.css';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import About from './components/About';
import Textform from './components/Textform';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light'); // weither dark mode is enabled or not 

  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
      setAlert({
          msg: message,
          type: type
      })
      setTimeout(() => {
          setAlert(null);
      }, 1500);
  }

  const toggleMode= ()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor= '#212529';
      showAlert("Dark mode has been activated", "success");
      document.title = 'TextUtils - Dark mode';
    }
    else{
      setMode('light');
      document.body.style.backgroundColor= 'white';
      showAlert("Light mode has been activated", "success");
      document.title = 'TextUtils - Light mode';
    }
  }

  return (
      <>
      <Router>
      <Navbar title = "TextUtils" AboutText = "About Us" mode={mode} toggleMode={toggleMode}/>
      {/* <Navbar/> */}
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
          <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<Textform showAlert={showAlert} heading="Enter Your Text" mode={mode} />}/>
      </Routes>
      {/* <About/> */}
      </div>
      </Router>
      </>
  );
}

export default App;

