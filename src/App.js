import './App.css';
import Home from './pages/Home/Home';
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/Login";
import Signup from "./pages/Signup/Signup";

function App() {
  return (
    <div style={{backgroundColor: '#0a0f1d'}}>
      <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login/>} />
              <Route path="/signup" element={<Signup />} />
     </Routes>


   </div>
  );
}

export default App;
