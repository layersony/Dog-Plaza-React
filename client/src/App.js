import './App.css';
import { Routes, Route } from 'react-router-dom'

import NavigationBar from "./Components/Navbar";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import SignIn from "./Components/SignIn";
import NotFound from "./Components/NotFound";
import DogDetail from "./Components/DogDetail"
import Account from "./Components/Accounts"


import './styles/main.css'

function App() {


  return (
    <>
      <NavigationBar />
      <Routes>
        <Route path='/doghouse/:id' element={<DogDetail />} onEnter={<SignIn />} />
        <Route path='/account' element={<Account />} onEnter={<SignIn />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/signup' element={<SignUp />} />
        <Route exact path='/' element={<Home />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
