import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import Navbar from "./Component/Nav/Navbar";
import Profile from "./Component/Profile";
import Project from "./Component/Project";
import About from "./Component/About";
import Contact from "./Component/Contact";
import Allproject from "./Component/Allproject";
import BackToTop from "./Component/BackToTop";
import Footer from "./Component/Footer";

function App() {
  return (
    <Router>
      <AppRoutes />
      <BackToTop />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();

  return (
    <>
      {location.pathname != "/Allproject" && <Navbar />}

      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Profile />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/about" element={<About />} />
        <Route path="/project" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Allproject" element={<Allproject />} />
        <Route path="/footer" element={<Footer/>} />

      </Routes>
    </>
  );
}

export default App;
