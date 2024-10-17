import "./index.css";
import Home from "./components/Home";
import About from "./components/About";
import Contacts from "./components/Contacts";
import Blog from "./components/Blog";
import { Link, Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <nav className="bg-gray-500 p-0 shadow-lg ">
        <div className="list">
          <div className="">
            <button className="h-14">
              <Link to="/">
                <img
                  src="images/alpha-logo.avif"
                  alt="logo"
                  className="box-border h-14 w-14 p-0"
                />
                <p className="bg-gray-400 w-14">Home</p>
              </Link>
            </button>
            <button className="bg-red-500 hover:bg-red-700">
              <Link to="/about">About</Link>
            </button>
            <button className="bg-red-500 hover:bg-red-700">
              <Link to="/contacts">Contacts</Link>
            </button>
            <button className="bg-red-500 hover:bg-red-700">
              <Link to="/blog">Blog</Link>
            </button>
          </div>
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
