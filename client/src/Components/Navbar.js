import { Link } from "react-router-dom";

function Navbar({user, setUser}) {
  function handleLogout() {
    fetch("/logout",{
      method: "DELETE",
    }).then(() => setUser())
  }

  if(!user) 
  return(
    <header>
      <div>
        <h1 class="logo-name">Melo's Jamaican Joint </h1>
        <h5 class="logo-sub">"Just Another Day In Paradise"</h5>
      </div>
       
        <div class="container green borderXwidth">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/signin">Sign-In</Link>
        </div>
    
  </header>
  )
  else{
  return (
  
      <header>
          <div>
          <h1 class="logo-name">Melo's Jamaican Joint </h1>
          <h5 class="logo-sub">"Just Another Day In Paradise"</h5>
          </div>
       

        <div class="container green borderXwidth">
          <Link to="/">Home</Link>
          <Link to="/menu">Menu</Link>
          <Link to="/Cart">Cart</Link>
          <Link to="/" onClick={handleLogout}>Logout</Link>
        </div>

      </header>

  );
}}

export default Navbar;