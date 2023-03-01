import React, { useEffect, useState } from "react";

function LoginForm() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isLogin, setIsLogin] = useState(true);


  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!username || !password || (!isLogin && (!email || !confirmPassword))) {
      alert("Please fill out all required fields");
      return;
    }

    function fetchUsers(){
    fetch ("http://localhost:9292/users") 
    .then((resp) =>resp.json())
    .then((data)=>{

      const foundUser = data.find((user) => user.username === username && user.password === password);

      if (foundUser) {
        // Log in the user
        alert("User logged in successfully");
      } else {
        // Show an error message to the user
        alert("Username or password is incorrect");
      }
    });;
    }

  function signUp() {

    fetch("http://localhost:9292/users")
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data)
        const userExists = data.find((user) => user.name === username || user.email === email);
        if (userExists) {
          alert("Username or email already exists");
          } else {
            fetch("http://localhost:9292/users", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                username,
                password,
                email,
              }),
            })
              .then((resp) => resp.json())
              .then((data) => {
                alert("User signed up successfully");
              })
              .catch((error) => {
                alert(error.message)
                console.error("Error signing up the user:", error);
              });
          }
        });
  }

    if (isLogin) {
      // Send a request to the server to log the user in
      fetchUsers();
    } else {
      // Send a request to the server to sign the user up
      signUp();
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div 
    style={{
      background: 'white',
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      padding: '1rem',
      borderRadius: '10px',
      boxShadow: '0px 0px 10px #ccc'
    }} 
    >
      <form onSubmit={handleSubmit}>
        
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        {!isLogin && (
          <label>
            Email:
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
        )}
        <br />
        <label>
          Password:
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        {!isLogin && (
            <label>
            Confirm Password:
            <input
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </label>
        )}
        <br />
        <button className="btn btn-success" style={{float:'left',}}  onClick={handleSubmit} type="submit">{isLogin ? "Login" : "Sign Up"}</button> 
        <button className="btn btn-success" style={{float:'right',}} type="button" onClick={toggleForm}>
          {isLogin ? "Sign Up" : "Login"}
        </button>
      </form>
    </div>
  );
}

export default LoginForm;

