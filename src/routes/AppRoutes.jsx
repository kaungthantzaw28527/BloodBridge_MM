import { Routes, Route } from "react-router-dom";
import LandingPage from "../pages/LandingPage.jsx";
import FindDonorsPage from "../pages/FindDonorsPages.jsx";
import RequestBloodPage from "../pages/RequestBloodPage.jsx";
import AboutUsPage from "../pages/AboutUsPage.jsx";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/donors" element={<FindDonorsPage />} />
      <Route path="/requests" element={<RequestBloodPage />} />
      <Route path="/about" element={<AboutUsPage />} />
    </Routes>
  );
}
