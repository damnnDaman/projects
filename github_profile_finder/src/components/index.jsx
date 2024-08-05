import { useEffect, useState } from "react";
import User from "./user";
import "./styles.css";

function GitHubProfileFinder() {
  //setting a default value of a github profile-----
    const [userName, setUserName] = useState("damndaman");
    const [userData, setUserData] = useState(null);
    const [loading, setLoading] = useState(true);

  //api request handling-----
    async function fetchGithubProfile() {
        setLoading(true);
    fetch(`https://api.github.com/users/${userName}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.message) {
          alert(data.message);
        } else {
            setUserData(data);
            setLoading(false);
        }
      })
      .catch((error) => console.error(error));
  }

    function handleSubmit() {
       fetchGithubProfile();
  }

  useEffect(() => {
    fetchGithubProfile();
  }, []);
    
    if (loading) {
      return <div>Loading...</div>;
    }

  return (
    <div className="github-profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          name="search-by-username"
          placeholder="Enter GitHub username"
          value={userName}
          onChange={(event) => setUserName(event.target.value)}
        />

        <button onClick={handleSubmit}>Search</button>
          </div>
          {
              userData !== null ? <User user={userData}/>: null
          }
    </div>
  );
}

export default GitHubProfileFinder;
