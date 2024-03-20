import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home.jsx'
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import LocationAccess from './pages/LocationAccess.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/location" element={<LocationAccess />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
