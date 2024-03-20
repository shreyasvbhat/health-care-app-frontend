import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx"
import LocationAccess from "./pages/LocationAccess.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import AptSuccess from "./pages/AptSuccess.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/landingPage' element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/location" element={<LocationAccess />} />
        <Route path="/aptSuccess" element={<AptSuccess aptTime={"11:45 AM"}/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
