
import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "./components/login/LoginPage.jsx";
import LandingPage from "./components/landing/landingPage.jsx";
import DashboardPage from "./components/Dashboard/DashboardPage.jsx";
import SignupPage from "./components/SingUp/SignupPage.jsx";
import CoursesPage from "./components/Courses/CoursesPage.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/courses" element={<CoursesPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;