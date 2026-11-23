console.log(5);
function Navbar({user={isLoggedIn:false, name:"Anonymous"}}) {
  console.log(4);
  return (
    <>
      <ul>
        <li>home</li>
        <li>shop</li>
        <li>about us</li>
        {/* conditional rendering */}
        <li>{user.isLoggedIn ? user.name : "LogIn"}</li>
      </ul>
    </>
  );
}

export default Navbar;