import React, { useEffect, useState } from "react";
import "./Leaderboard.css";

export default function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    try {
      const res = await fetch("https://surakshasetu-backend-nyze.onrender.com/api/leaderboard");
      const data = await res.json();

      const rankedData = data
        .sort((a, b) => b.totalScore - a.totalScore)
        .map((user, index) => ({ ...user, rank: index + 1 }));

      setLeaderboard(rankedData);
      setLoading(false);

      // Animate score bars after render
      setTimeout(() => {
        document.querySelectorAll(".score-bar").forEach((bar, i) => {
          bar.style.width = `${(rankedData[i].totalScore / rankedData[0].totalScore) * 100}%`;
        });
      }, 100);
    } catch (err) {
      console.error("Error fetching leaderboard:", err);
      setLoading(false);
    }
  };

  if (loading) return <div>Loading leaderboard...</div>;

  return (
    <div className="leaderboard-container">
      <h2>🏆 Leaderboard</h2>

      {/* Header spans */}
      <div className="leaderboard-headers">
        <span>Rank</span>
        <span>Username</span>
        <span>Total Score</span>
        <span>Badge</span>
      </div>

      {/* Leaderboard rows */}
      <div className="leaderboard-table">
        {leaderboard.map((user) => (
          <div className="leaderboard-row" key={user.rank}>
            <div>
              <span
                className={`rank-circle ${
                  user.rank === 1 ? "gold" : user.rank === 2 ? "silver" : user.rank === 3 ? "bronze" : ""
                }`}
              >
                {user.rank}
              </span>
            </div>
            <div>{user.username}</div>
            <div>
              <div className="score-bar-container">
                <div className="score-bar"></div>
              </div>
              {user.totalScore}
            </div>
            <div className={`badge ${user.rank === 1 ? "gold" : user.rank === 2 ? "silver" : user.rank === 3 ? "bronze" : ""}`}>
              {user.rank === 1 ? "🥇" : user.rank === 2 ? "🥈" : user.rank === 3 ? "🥉" : "🎖️"}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
