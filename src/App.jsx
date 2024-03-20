import { Route, Routes } from "react-router-dom";
import Home from "./pages/home.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import SignUpPage from "./pages/SignUpPage.jsx";
<<<<<<< HEAD
import LocationAccess from './pages/LocationAccess.jsx';
import ProfilePage from "./pages/ProfilePage.jsx";
=======
import ProfilePage from "./pages/ProfilePage.jsx";
import AuthenticatedRoute from "./components/AuthenticatedRoute.jsx";
import AboutPage from "./pages/about.jsx";
import Navbar from "./components/navbar-new.jsx";
import LocationAccess from "./pages/LocationAccess.jsx";
import WorkDetailsPage from "./pages/work-details.jsx";
import NotFound from "./pages/not-found.jsx";
>>>>>>> 0dbb93c426eeb7a8ff22c9a8e4eae633a0504233

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<Navbar />}>
        <Route path="/" element={<Home />} />
<<<<<<< HEAD
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/location" element={<LocationAccess />} />
        <Route path="/profile" element={<ProfilePage />} />
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
>>>>>>> 0dbb93c426eeb7a8ff22c9a8e4eae633a0504233
  );
}

export default App;
