import reactRouterDom from 'react-router-dom';
import { useEffect, useState } from "react";
import React from 'react';
import Login from "./Login";
import SignUp from "./SignUp";

function SignInPage({onLogin}) {
    // const [user, setUser] = useState(null);

  return (
    
    <div class="">
      <Login onLogin={onLogin} ></Login>
      <SignUp onLogin={onLogin} ></SignUp>
      
    </div>
  );
}

export default SignInPage;