import useAuth from "./hooks/useAuth";
import Form from "./components/Form";
import Main from "./components/Main";
import Header from "./components/Header";

function App() {
  const { user, logIn } = useAuth();
  return (
    <div className="App">
      <Header />
      {user ? <Main /> : <Form onSumbit={logIn} />}
    </div>
  );
}

export default App;
