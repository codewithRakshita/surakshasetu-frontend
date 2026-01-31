import React from "react";
import "./menu.css";
import { Link } from "react-router-dom";

function Menu({ isOpen, onClose }) {
  const userType = localStorage.getItem("userType");
  console.log("UserType in localStorage:", userType);

  const dashboardPath = userType === "teacher" ? "/teacherdashboard" : "/dashboard";
  const addQuizPath = userType === "teacher" ? "/addquiz" : "/quiz"; // teacher => addquiz, others => quiz

  return (
    <nav
      className={`sidebar-fixed ${isOpen ? "open" : "closed"}`}
      role="navigation"
      aria-label="Disaster menu"
    >
      <button className="close-btn" onClick={onClose} aria-label="Close menu">
        ✖
      </button>

      <h2 className="menu-title">🌟 Menu 🌟</h2>

      <ul className="menu-list">
        <Link to="/"><li tabIndex="0">🏠︎ Home </li></Link>
        <Link to={dashboardPath}><li tabIndex="0">📊 Dashboard </li></Link>
        <Link to="/awareness"><li tabIndex="0">🧠 Awareness </li></Link>
        <Link to="/prepardness"><li tabIndex="0">🔒 Preparedness</li></Link>
        <Link to="/response"><li tabIndex="0">🆘 Response </li></Link>
        <Link to="/recovery"><li tabIndex="0">💖 Recovery </li></Link>
        <Link to={addQuizPath}><li tabIndex="0">🎯 Quiz </li></Link>
        <Link to="/games"><li tabIndex="0">🎮 Games </li></Link>
        <li tabIndex="0">
        📖 <a 
       href="C:/Users/raksh/OneDrive/Desktop/program/HTML/dares2/dares2/public/Surakshasetu.pdf"
     target="_blank" 
    rel="noopener noreferrer"
  >
    SurakshaSetu
  </a>
</li>

      </ul>
    </nav>
  );
}

export default Menu;
