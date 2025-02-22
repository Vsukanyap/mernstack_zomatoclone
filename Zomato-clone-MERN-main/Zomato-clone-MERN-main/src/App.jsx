import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;





// import React from 'react'
// import Login from './pages/Login'
// import Navbar from './components/Navbar'
// import Register from './pages/Register'
// import Home from './pages/Home'
// import './App.css'

// const App = () => {
//   return (
//     <div>
//       <Navbar/>
    

//     </div>
//   )
// }

// export default App
