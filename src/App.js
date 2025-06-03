import { Component, createContext, useContext, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import New from './pages/new';
import List from './pages/list';
import About from './pages/about';
import User from './pages/user';
// import Login from './pages/login';
import Signup from './pages/signup';
import Notes from './pages/notes';
import Weather from './pages/weather';


const AuthContext = createContext();

function App() {

  const [user, setUser] = useState(null);

  return (
    // <Router>
    //   <nav>
    //     <ul>
    //       <li>
    //         <Link to='/'>Home</Link>
    //       </li>
    //       <li>
    //         <Link to='/about'>About</Link>
    //       </li>
    //       <li>
    //         <Link to='/user'>User</Link>
    //       </li>
    //       <li>
    //         <Link to='/no-match'>No Match</Link>
    //       </li>
    //       <li>
    //         <Link to='/login'>Login</Link>
    //       </li>
    //       <li>
    //         <Link to='/notes'>Notes</Link>
    //       </li>
    //     </ul>
    //   </nav>
    //   <Routes>
    //     <Route path="/about" element={<About />} />
    //     <Route path="/" element={<Home />} />
    //     <Route path="login" element={<Login />} />
    //     <Route path="notes" element={<Notes />} />
    //     <Route path="/weather" element={<Weather />} />
    //     <Route path="/user" element={<User />} >
    //       <Route path="signup" element={<Signup />} />
    //     </Route>
        
    //   </Routes>
    // </Router>
    <AuthContext.Provider value={{user, setUser}}>
      <Login />
      <Signup />
    </AuthContext.Provider>
  );
}


function Login() {
  const {user, setUser} = useContext(AuthContext);
  return user ? (
    <p>Wecome User - {user}</p>
  ) : (<button onClick={() => setUser("Dhoni")}>Login</button>)
}



export default App;
