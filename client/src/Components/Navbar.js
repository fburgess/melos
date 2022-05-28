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
      <div class="logo">
        <h1 class="logo-name">Melo's Jamaican Joint </h1>
        <h5 class="logo-sub">"Just Another Day In Paradise"</h5>
      </div>
      
    </header>
    )
    else{
  return (
    <header>
      <div class="logo">

        <h1 class="logo-name">Melo's Jamaican Joint </h1>
        <h5 class="logo-sub">"Just Another Day In Paradise"</h5>
      </div>
      <nav class="nav-bar">

        <Link to="/">||Home</Link>
        <Link to="/">||Menu</Link>
        <Link to="/">||Ratings</Link>
        <Link to="/" onClick={handleLogout}>||Logout||</Link>
      </nav>
    </header>

  );
}}

export default Navbar;