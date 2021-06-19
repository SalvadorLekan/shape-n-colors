import { useState } from "react";
export default function Form(props: { onSumbit: Function }) {
  const [value, setValue] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.onSumbit(value);
      }}
    >
      <label htmlFor="v">Type a name to login</label>
      <input
        type="text"
        id="v"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        required
      />
      <button disabled={!value.trim()}>Log In</button>
    </form>
  );
}
