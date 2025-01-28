import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import ProtectedRoute from "../Express/ProtectedRoute"; // ProtectedRoute for guarding routes
import Copyright from "./components/copyright/copyright"; // Footer Copyright
import LoginPage from "./components/LoginPage/Login"; // Login Page Component
import RegisterPage from "./components/RegisterPage/RegisterPage"; // Register Page Component
import Loading from "./components/LoadingAnimations/Loading"; // request Loading Pages
import Portfolio from "./components/certificates/portfolio"; // Portfolio Page
import Search from "./components/Search/search"; // Search Component
import "bootstrap/dist/css/bootstrap.min.css"; // Bootstrap CSS

// Home Component
function Home() {
  return (
    <div className="home-container">
      <div className="container mt-5">
        <h1>Welcome to PraiwanX</h1>
        <p>ยินดีต้อนรับเข้าสู่เว็บไซต์ เก็บผลงาน หรือ Portfolio</p>
      </div>
    </div>
  );
}

function App() {
  // Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="app-container">
      <Router>
        <div className="App">
          {/* Navigation Menu */}
          <nav className="navbar navbar-expand-lg navbar-light bg-light shadow">
            <div className="container-fluid">
              <Link className="navbar-brand fw-bold" to="/">
                PraiwanX
              </Link>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" aria-current="page" to="/">
                      Home
                    </Link>
                  </li>
                  {isLoggedIn ? (
                    <li className="nav-item">
                      <button
                        className="btn btn-outline-danger ms-3"
                        onClick={() => setIsLoggedIn(false)}
                      >
                        Logout
                      </button>
                    </li>
                  ) : (
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
                {/* Search Component */}
                <Search />
              </div>
            </div>
          </nav>

          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/login"
              element={<LoginPage setIsLoggedIn={setIsLoggedIn} />}
            />
            <Route
              path="/portfolio"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Portfolio />
                </ProtectedRoute>
              }
            />
            <Route
              path="/protected"
              element={
                <ProtectedRoute isLoggedIn={isLoggedIn}>
                  <Home />
                </ProtectedRoute>
              }
            />
          </Routes>
        </div>
        {/* Footer */}
        <Copyright />
      </Router>
    </div>
  );
}

export default App;
