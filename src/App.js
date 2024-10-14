import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";

// styles
// import "bootstrap/scss/bootstrap.scss";
//import "./assets/scss/paper-kit.scss?v=1.3.0";
// import "./assets/demo/demo.css?v=1.3.0";
import Home from './Screens/Home';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/nucleo-icons" element={<NucleoIcons />} />
      <Route path="/landing-page" element={<LandingPage />} />
      <Route path="/profile-page" element={<ProfilePage />} />
      <Route path="/register-page" element={<RegisterPage />} />
      <Route path="*" element={<Navigate to="/index" replace />} /> */}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
