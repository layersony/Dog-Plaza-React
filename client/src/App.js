import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom'

import NavigationBar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import NotFound from "./Components/NotFound";


function App() {
  const token = localStorage.getItem('jwt')

  useEffect(() => {
    fetch("/me", {
      method: "GET",
      headers: {
        Authorization:  `Bearer ${token}`
      }
    })
    .then(r => {
      if (!token) return <SignIn/>;
    })
  })

  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
