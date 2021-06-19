import useAuth from "../../hooks/useAuth";
import styles from "./Header.module.scss";

function Header() {
  const { user, logOut } = useAuth();
  return (
    <header className={styles.header}>
      <div>
        <p>Grid</p>
        {user ? <button onClick={logOut}>Log Out</button> : null}
      </div>
    </header>
  );
}

export default Header;
