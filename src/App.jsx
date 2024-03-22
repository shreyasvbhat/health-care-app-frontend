import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
import AuthenticatedRoute from "./components/AuthenticatedRoute.jsx";
import AboutPage from "./pages/About.jsx";
import LocationAccess from "./pages/LocationAccess.jsx";
import D_dash_patientList from "./pages/D_dash_patientList.jsx";
import AptSucccess from "./pages/AptSuccess.jsx";
import LandingPage from "./pages/LandingPage.jsx";
import SearchPage from "./pages/Search.jsx";
import ProfilePage from "./pages/Profile.jsx";
import Navbar from "./components/NavBar.jsx";
import NotFound from "./pages/NotFound.jsx";
import WorkDetailsPage from "./pages/WorkDetails.jsx";
import DoctorPage from "./pages/DoctorPage.jsx";
// import ProfilePage from "./pages/ProfilePage.jsx";

function App() {
  return (
    <Routes>
      <Route element={<Navbar />}>
        {/* Public Routes */}
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/location" element={<LocationAccess />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="/doctor" element={<DoctorPage />} />

        <Route path="*" element={<NotFound />} />

        {/* Protected Routes */}
        <Route path="/dashboard" element={<AuthenticatedRoute />}>
          <Route path="" element={<ProfilePage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="D_dash_patient" element={<D_dash_patientList />} />
          <Route path="aptSuccess" element={<AptSucccess />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Route>

      {/* Protected Routes without navbar */}
      <Route path="/workdetails/:doctorId" element={<WorkDetailsPage />} />

      {/* Authentication routes */}
      <Route path="/login" element={<LoginPage />} />
      <Route path="/signup" element={<SignUpPage />} />
    </Routes>
  );
}

export default App;
