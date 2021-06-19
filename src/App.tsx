import styles from "./App.module.scss";
import useAuth from "./hooks/useAuth";
import Form from "./components/Form";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const { user, logIn } = useAuth();
  return (
    <div className={styles.App}>
      <Header />
      <main className={styles.main}>
        {user ? <Main /> : <Form onSumbit={logIn} />}
      </main>
    </div>
  );
}

export default App;
