import React, { useEffect, useState, useCallback } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Score.css";

const API_URL = "https://surakshasetu-backend-nyze.onrender.com";

function Score() {
  const location = useLocation();
  const navigate = useNavigate();

const username = location.state?.username || localStorage.getItem("username") || "Student";

  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchScores = useCallback(async () => {
    try {
      setLoading(true);
      const res = await axios.get(`${API_URL}/scores/${username}`);
      setScores(res.data);
    } catch (err) {
      console.error("Error fetching scores:", err);
    } finally {
      setLoading(false);
    }
  }, [username]);

  useEffect(() => {
    fetchScores();
  }, [fetchScores]);

  // ✅ Make sure topic names exactly match what you save
  const quizStructure = {
    Earthquake: ["MCQ", "True/False", "Scenario"],
    Landslide: ["MCQ", "True/False", "Scenario"],
    Flood: ["MCQ", "True/False", "Scenario"],
    "Forest Fire": ["MCQ", "True/False", "Scenario"],
  };

  // ✅ Group scores by topic and type
  const groupedScores = {};
  Object.entries(quizStructure).forEach(([topic, types]) => {
    groupedScores[topic] = types.map((type) => {
      const match = scores.find(
        s => s.topic?.toLowerCase() === topic.toLowerCase() && s.type === type
      );
      return match || { type, score: "—", date: null };
    });
  });

  return (
    <div className="score-container">
      <h1>📊 Scores of {username}</h1>

      {loading && <p className="empty-msg">Loading scores...</p>}
      {!loading && scores.length === 0 && <p className="empty-msg">No scores found yet!</p>}

      <div className="sections">
        {Object.entries(groupedScores).map(([topic, list]) => (
          <div key={topic} className="section-card">
            <h2>{topic} Quizzes</h2>
            <div className="table-wrapper">
              <table className="modern-table">
                <thead>
                  <tr>
                    <th>Quiz Type</th>
                    <th>Score</th>
                    <th>Date</th>
                  </tr>
                </thead>
                <tbody>
                  {list.map((s, i) => (
                    <tr key={i}>
                      <td>{s.type}</td>
                      <td>{s.score}</td>
                      <td>{s.date ? new Date(s.date).toLocaleString() : "—"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>

      <div className="buttons-container">
        <button className="back-btn" onClick={() => navigate(-1)}>
          ⬅ Back
        </button>
        <button className="back-btn" onClick={fetchScores}>
          🔄 Refresh
        </button>
      </div>
    </div>
  );
}

export default Score;