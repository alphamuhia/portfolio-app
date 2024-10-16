import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <div>
          <Link to="/"></Link>
        </div>
        <div className="list">
          <ul>
            <li>
              <img src="images/alpha-logo.avif" alt="logo" />
            </li>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contacts">Contacts</Link>
            </li>
            <li>
              <Link to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About/*" element={<About />} />
        <Route path="/Contacts" element={<Contacts />} />
        <Route path="/Blog" element={<Blog />} />
      </Routes>
      <footer>
        <p>© 2024 Alpha Peter. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
