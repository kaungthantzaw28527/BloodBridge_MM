import GuestNavbar from "./components/layout/GuestNavbar.jsx";
import Footer from "./components/layout/Footer.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";

export default function App() {
  return (
    <div className="app-shell">
      <GuestNavbar />
      <main>
        <AppRoutes />
      </main>
      <Footer />
    </div>
  );
}
