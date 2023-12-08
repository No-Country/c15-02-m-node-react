import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import UserInfo from './Components/UserInfo/UserInfo';
import Users from './Components/Users/Users';
import { useGlobalState } from './Context/context';
import { useEffect } from 'react';
import Error from './Views/404/Error';
import Tutorial from './Views/Tutorial/Tutorial';


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
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/tutorial" element={<Tutorial />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/users" element={<Users />}/>
          <Route path="/users/:id" element={<UserInfo />}/>
          <Route path="*" element={<Error />}/>
        </Routes>
      </div>
      <Footer />

    </div>
  );
}

export default App
