import React, { useState } from "react";
import DownloadPage from "./DownloadPage";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    if (username && password) {
      setIsLoggedIn(true);
      alert(`selamat datang ${username}`);
    } else {
      alert("Username dan Password harus diisi");
    }
  };
  return (
    <div>
      {isLoggedIn ? (
        <div>
          <DownloadPage username = {username} />
        </div>
      ) : (
        <div>
          <h2>Login</h2>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <br />
          <button onClick={handleLogin}>Login</button>
        </div>
      )}
    </div>
  );
}

export default LoginPage;
