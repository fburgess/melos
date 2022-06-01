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

  const addComment = (formData) => {
    fetch('/reviews', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json'
      },
      body: JSON.stringify(formData)
    })
      .then(res => res.json())
      .then(newComment => {
        setCommentData(commentData.concat(newComment))
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
                  <Menu />
               </Route>
               <Route exact path="/signin">
                  <SignInPage onLogin={setUser} />
               </Route>
               <Route exact path="/cart">
                  <Cart />
               </Route>
               <Route exact path="/ratings">
                  <Ratings commentData={commentData} setCommentData={setCommentData} addComment={addComment}/>
               </Route>
              </Switch> 
          </Router>
      );    
    
    // return (

    //   <Router>
    //       <Navbar user={user} setUser={setUser} />
    //     <Switch>
    //         <Route exact path="/">
    //           <Home />
    //         </Route>
    //         <Route exact path="/concerts">
    //           <ConcertHomePage />
    //         </Route>
    //       <Route exact path="/concerts/:id">
    //           <Concert commentData={commentData} setCommentData={setCommentData} addComment={addComment}/>
    //             {/* <Comments /> */}
    //       </Route>  
    //       <Route exact path="/comments">
    //           <Comments commentData={commentData} setCommentData={setCommentData} addComment={addComment} />
    //       </Route>
    //       <Route    path="/comments/:id/edit"
    //               render={({ match }) => (
    //                     <CommentEditForm
    //                         comment={commentData.find((comment) => comment.id === parseInt(match.params.id))}
    //                         updateComment={updateComment}
    //                     />
    //               )}
    //        /> 
    //     </Switch> 
    //   </Router>
    // );
  }
  
  export default App;

