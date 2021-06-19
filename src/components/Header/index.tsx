import useAuth from "../../hooks/useAuth";

function Header() {
  const { user, logOut } = useAuth();
  return (
    <header>
      <p>Grid</p>
      {user ? <button onClick={logOut}>Log Out</button> : null}
    </header>
  );
}

export default Header;
