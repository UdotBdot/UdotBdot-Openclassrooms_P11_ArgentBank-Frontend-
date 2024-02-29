import './App.scss'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../pages/Home'
import Login from '../pages/Login';
import Profile from '../pages/Profile.jsx';
import Header from "../components/Header/Header.jsx"
import Footer from "../components/Footer/Footer.jsx"
// SCSS
import "../components/Footer/Footer.scss"
import "../components/Features/Features.scss"


function App() {
  return (
    <BrowserRouter>
      <header>
        <Header />
      </header>
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/login" element={<Login />}/>
      <Route path="/profile" element={<Profile />}/>
    </Routes>
    <footer className="footer">
        <Footer />
    </footer>
    </BrowserRouter>
  )
}

export default App
