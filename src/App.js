import { Link, Routes, Route } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contacts";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faLinkedin,
  faGithub,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import "./index.css";

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="bg-gray-500 text-white p-5 flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4">
            <li>
              <Link to="/Hero" className="hover:text-yellow-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="/About" className="hover:text-yellow-500">
                About
              </Link>
            </li>
            <li>
              <Link to="/Projects" className="hover:text-yellow-500">
                Projects
              </Link>
            </li>
            <li>
              <Link to="/Contacts" className="hover:text-yellow-500">
                Contacts
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <Routes>
          <Route path="/Hero" element={<Hero />} />
          <Route path="/About" element={<About />} />
          <Route path="/Projects" element={<Projects />} />
          <Route path="/Contacts" element={<Contact />} />
        </Routes>
      </main>

      <footer className="bg-gray-800 text-white py-6">
        <div className="container mx-auto text-center">
          <p className="mb-4">© 2024 Alpha Peter. All rights reserved.</p>

          <ul className="list-none p-0 flex gap-x-2.5 justify-center">
            <li>
              <a
                href="https://www.facebook.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faFacebook} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/yourprofile"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </footer>
    </div>
  );
}

export default App;
