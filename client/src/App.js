import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { useHistory, useLocation } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import SignInPage from "./Components/SignInPage";
import Cart from "./Components/Cart";
import Ratings from "./Components/Ratings";
import OrderHistory from "./Components/OrderHistory";
import RatingsEditForm from "./Components/RatingsEditForm";




function App() {

  const [user, setUser] = useState(null);
  const [commentData, setCommentData] = useState([]);
  const history = useHistory();


  useEffect(() => {
    // auto-login
    fetch("/me").then((r) => {
      if (r.ok) {
        r.json().then((user) => setUser(user));
      }
    });
  }, []);

  useEffect(() => {
    fetch('/reviews')
      .then(res => res.json())
      .then((data) => setCommentData(data))
  }, [])

  const addReview = (formData) => {
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newReview => {
        setCommentData(commentData.concat(newReview))
      });
  }

  const updateReview = (id, formData) => {
    fetch(`/reviews/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(updatedComment => {
        // pessimistically update the dog in state after we get a response from the api
        setCommentData(commentData.map((review) => (review.id === parseInt(id) ? updatedComment : review)));
        window.location.href = `/reviews`;
      });
    }

  
    return (
        <Router>
             <Navbar user={user} setUser={setUser}  />
              <Switch>
               <Route exact path="/">
                  <Home />
               </Route> 
               <Route exact path="/menu">
                  <Menu user={user} />
               </Route>
               <Route exact path="/signin">
                  <SignInPage onLogin={setUser} />
               </Route>
               <Route exact path="/cart">
                  <Cart />
               </Route>
               <Route exact path="/ratings">
                  <Ratings commentData={commentData} setCommentData={setCommentData} addReview={addReview}/>
               </Route>
               <Route    path="/ratings/:id/edit"
                render={({ match }) => (
                    <RatingsEditForm
                    comment={commentData.find((review) => review.id === parseInt(match.params.id))}
                    updateReview={updateReview}
                  />
                )}
              /> 
               <Route exact path="/orderhistory">
                  <OrderHistory />
               </Route>
              </Switch> 
          </Router>
      );    
    
  
  }
  
  export default App;

