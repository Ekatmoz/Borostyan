import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './Screens/Home';
import Info from './Screens/Szikviz/Info';
import IndexNavbar from './Components/Navbar/IndexNavbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';
import PiViz from './Screens/PiViz/PiViz';

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <IndexNavbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/szikviz" element={<Info/>} />
        <Route path="/piviz" element={<PiViz/>} />
      </Routes>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
