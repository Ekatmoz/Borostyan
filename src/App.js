import './App.css';
import React, { Suspense, lazy } from 'react';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexNavbar from './Components/Navbar/IndexNavbar';
import Footer from './Components/Footer/Footer';
import ScrollToTop from './Components/ScrollToTop';

const Home = lazy(() => import('./Screens/Home'));
const Info = lazy(() => import('./Screens/Szikviz/Info'));
const PiViz = lazy(() => import('./Screens/PiViz/PiViz'));

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop /> 
      <IndexNavbar/>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/szikviz" element={<Info/>} />
          <Route path="/piviz" element={<PiViz/>} />
        </Routes>
      </Suspense>
    <Footer/>
    </BrowserRouter>
  );
}

export default App;
