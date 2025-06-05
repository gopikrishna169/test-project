import { Component, createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import CustomNavbar from './pages/customnavbar';


const AuthContext = createContext();

function App() {

  return (
    <Router>
      <CustomNavbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );

}


function Login() {
  const {user, setUser} = useContext(AuthContext);
  return user ? (
    <p>Wecome User - {user}</p>
  ) : (<button onClick={() => setUser("Dhoni")}>Login</button>)
}



export default App;
