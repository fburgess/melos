import React, { useState } from "react";
// import { button, error, input, FormField, label, textArea } from "../styles";

function Signup({ onLogin }) {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirmation, setPasswordConfirmation] = useState("");
  const [errors, setErrors] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
    setErrors([]);
    setIsLoading(true);
    fetch("/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: name,
        password,
        password_confirmation: passwordConfirmation,
      }),
    }).then((r) => {
      setIsLoading(false);
      if (r.ok) {
        r.json().then((user) => onLogin(user));
      } else {
        r.json().then((err) => setErrors(err.errors));
      }
    });
  }

  return (
  
    <div class="form sign-up">
      <h2>Create your Account</h2>
      <form  onSubmit={handleSubmit}>
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
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="current-password"
            />
         </formField>

      <formField>
        <label htmlFor="password">Password Confirmation</label>
        <input
          type="password"
          id="password_confirmation"
          value={passwordConfirmation}
          onChange={(e) => setPasswordConfirmation(e.target.value)}
          autoComplete="current-password"
        />
      </formField>
      <formField>
        <button class="submit" type="submit">{isLoading ? "Loading..." : "Sign Up"}</button>
      </formField>
      <formField>
        {errors ? errors.map((err) => (
          <error key={err}>{err}</error>
        )) : 'Error Occured'}
      </formField>
    </form>
      
    </div>
  );
}

export default Signup;
      