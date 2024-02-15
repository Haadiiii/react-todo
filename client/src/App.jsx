import React, { useEffect, useState } from "react";
import axios from "axios";
import Todo from "./components/Todo";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);
      setIsLoggedIn(true);
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("username");
    sessionStorage.removeItem("password");
    setIsLoggedIn(false);
  };

  useEffect(() => {
    const username = sessionStorage.getItem("username");
    const password = sessionStorage.getItem("password");
    if (username && password) {
      setIsLoggedIn(true);
    }
  }, []);

  return (
    <div>
      {isLoggedIn ? (
        <div>
          <div className="flex flex-col gap-5 pt-5 pl-10 ">
            <h1 className="text-xl font-bold">Welcome, {username}!</h1>
            <button
              className="bg-red-500 text-white font-bold py-2 px-4 w-20 rounded-md hover:bg-red-600"
              onClick={handleLogout}
            >
              Logout
            </button>
          </div>
          <Todo />
        </div>
      ) : (
        <div className="flex justify-center items-center h-screen bg-gray-200">
          <div className="bg-white p-8 rounded-lg shadow-md w-96">
            <input
              type="text"
              placeholder="Email or Phone Number"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-4"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              className="w-full px-4 py-2 border border-gray-300 rounded-md mb-6"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              className="w-full bg-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-blue-600"
              onClick={handleLogin}
            >
              Log In
            </button>
            <div className="text-center mt-4">
              <a href="#" className="text-blue-500 hover:underline">
                Forgotten password?
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
