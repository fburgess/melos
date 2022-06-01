import React, { useState } from "react";

function Login({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setIsLoading(true);
    fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, password }),
    }).then((r) => {
        console.log(r);
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (  
     <div class="form sign-in">
            <h2>Welcome</h2>
            <form onSubmit={handleSubmit}>
            <formField>
                <label htmlFor="username">Username</label>
                <input
                type="text"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
                />
            </formField>
            <formField>
                <label htmlFor="password">Password</label>
                <input
                type="password"
                id="password"
                autoComplete="current-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                />
            </formField>
            <formField>
                <button class="submit" variant="fill" color="primary" type="submit">
                {isLoading ? "Loading..." : "Login"}
                </button>
            </formField>
            <formField>
                {errors ? errors.map((err) => (
                <error key={err}>{err}</error>
                )) : ''}
            </formField>
      </form>
    </div>       

  );
}

export default Login;
