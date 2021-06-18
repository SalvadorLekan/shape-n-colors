import { useState } from "react";
import "./App.css";

function App() {
  const [value, setValue] = useState("");
  return (
    <div className="App">
      <label htmlFor="v">Type a name to login</label>
      <input
        type="text"
        id="v"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button disabled={!value.trim()}>Log In</button>
    </div>
  );
}

export default App;
