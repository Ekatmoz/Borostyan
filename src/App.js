import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Info from './Screens/Info';
import IndexNavbar from './Components/Navbar/IndexNavbar';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <BrowserRouter>
      <IndexNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/info" element={<Info/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
