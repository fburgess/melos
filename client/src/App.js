import './App.css';
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Menu from "./Components/Menu";
import SignInPage from "./Components/SignInPage";



function App() {

  const [user, setUser] = useState(null);








  
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
                  <SignInPage/>
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

