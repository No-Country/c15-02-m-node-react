import './App.css'
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from './Views/Landing/Landing';
import Home from './Views/Home/Home';
import Login from './Views/Login/Login';
import SignUp from './Views/SignUp/SignUp';

function App() {

  return (
    <div className="App">
     <Routes>
      <Route path="/" element={<Navigate to="/landing" />} />
      <Route path="/landing" element={<Landing />} />
      <Route path="/home" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<SignUp />} />
     </Routes>
    </div>
  )
}

export default App
