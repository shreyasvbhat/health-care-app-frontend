import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import ProfilePage from "./pages/ProfilePage.jsx";
import AuthenticatedRoute from "./components/AuthenticatedRoute.jsx";
import AboutPage from "./pages/about.jsx";
import Navbar from "./components/navbar-new.jsx";
import LocationAccess from "./pages/LocationAccess.jsx";
<<<<<<< HEAD
import LandingPage from "./pages/LandingPage.jsx";
import AptSuccess from "./pages/AptSuccess.jsx";
=======
import WorkDetailsPage from "./pages/work-details.jsx";
import NotFound from "./pages/not-found.jsx";
>>>>>>> ecbe25ed3661c31a3588ed9edd84bc0615d49d8f

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path='/landingPage' element={<LandingPage/>} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/profile" element={<ProfilePage/>} />
        <Route path="/location" element={<LocationAccess />} />
        <Route path="/aptSuccess" element={<AptSuccess aptTime={"11:45 AM"}/>} />
      </Routes>
    </BrowserRouter>
=======
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationAccess />} />
      </Route>

      {/* Authentication routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />

      {/* Protected Routes */}
      <Route element={<AuthenticatedRoute />}>
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/workdetails/:doctorId" element={<WorkDetailsPage />} />
      </Route>

      {/* Not Found Route */}
      <Route path="*" element={<NotFound />} />
    </Routes>
>>>>>>> ecbe25ed3661c31a3588ed9edd84bc0615d49d8f
  );
}

export default App;
