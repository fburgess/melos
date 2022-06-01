import reactRouterDom from 'react-router-dom';
import { useEffect, useState } from "react";
import React from 'react';
import Login from "./Login";
import SignUp from "./SignUp";

function SignInPage({onLogin}) {
const [showLogin, setShowLogin] = useState(true);

function showSignUpForm(){
    setShowLogin(false);
}
function showLoginForm(){
    setShowLogin(true);
}
  return (
    
    <div class="cont">
        {showLogin ? 
            <Login onLogin={onLogin} ></Login>
            :
            <SignUp onLogin={onLogin} ></SignUp>
        }

        <div class="sub-cont">
            <div class="img">
                {showLogin ?
                <div>
                <div class="img__text m--up">
                 
                    <h3>Don't have an account? Please Sign up!</h3>
                </div>
                <button class="img__btn" onClick={showSignUpForm}>
                    <span class="m--up"  >Sign Up</span>
                </button>
                </div>
                :
                <div>
                <div class="img__text m--in">
                
                    <h3>If you already has an account, just sign in.</h3>
                </div>
                <button class="img__btn" onClick={showLoginForm}>
                    <span class="m--up"  >Log In</span>
                </button>
                </div>
                }  


                
                
            </div>
    
        </div>
    </div>

   
  );
}

export default SignInPage;