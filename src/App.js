import './App.css';
import LoginPage from './pages/Login';
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LoginPage/>} exact />
        <Route path="/home" element={<Home/>} exact />
      </Routes>
    </div>
  );
}

export default App;
