import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UserInfo from './Components/UserInfo/UserInfo';
import Users from './Components/Users/Users';
import { useGlobalState } from './Context/context';
import { useEffect } from 'react';


function App() {
  const {handleDarkMode} = useGlobalState() 
  //Setea modo diurno/nocturo
  useEffect(()=>{
    handleDarkMode("no")
  }, [])
   
  return (
    <div className="app-container">
      <Header />
      <div className="app-content">
        <Routes>
          <Route path="/" element={<Navigate to="/landing" />} />
          <Route path="/landing" element={<Landing />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<Users />}/>
          <Route path="/users/:id" element={<UserInfo />}/>
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App
