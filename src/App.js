import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Info from './Screens/Info';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/info" element={<Info/>} />
    </Routes>
  </BrowserRouter>
  );
}

export default App;
