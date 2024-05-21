import { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";

function App() {
  const [userData, setUserData] = useState(null);
  const [username, setUsername] = useState(""); // State to keep track of input value
  const [error, setError] = useState(null); // State to keep track of errors

  const fetchGitHubUser = async (username) => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`,
        {
          headers: {
            Authorization: `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
          },
        }
      );
      setUserData(response.data);
      setError(null); // Reset error if data fetch is successful
    } catch (error) {
      console.error("Error fetching the GitHub user data", error);
      setUserData(null); // Reset userData if error occurs
      setError(
        "Failed to fetch user data. Please check the username or try again later."
      );
    }
  };

  useEffect(() => {
    if (username) {
      fetchGitHubUser(username);
    }
  }, [username]);

  return (
    <div className="App">
      <h1>GitHub User Info Card</h1>
      <input
        type="text"
        placeholder="Enter GitHub username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      {error && <p className="error">{error}</p>}
      {userData && (
        <div className="card">
          <img
            src={userData.avatar_url}
            alt={userData.login}
            className="avatar"
          />
          <h2>{userData.name}</h2>
          <p>{userData.location}</p>
          <p>{userData.bio}</p>
          <div className="social-media">
            <p>Followers: {userData.followers}</p>
            <p>Following: {userData.following}</p>
            <p>Repos: {userData.public_repos}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
