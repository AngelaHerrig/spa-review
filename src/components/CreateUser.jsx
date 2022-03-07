import { useState } from "react";

function CreateUser(props) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function updateName(e) {
    setName(e.target.value);
  }
  function updateEmail(e) {
    setEmail(e.target.value);
  }

  function updatePassword(e) {
    setPassword(e.target.value);
  }

  function createUser() {
    const user = { name, email, password };
    props.setUsers([...props.users, user]);
    setName("");
    setEmail("");
    setPassword("");
  }

  return (
    <div>
      <input
        value={name}
        type="text"
        placeholder="name"
        onChange={updateName}
      />
      <br />
      <input
        value={email}
        type="email"
        placeholder="email"
        onChange={updateEmail}
      />
      <br />
      <input
        value={password}
        type="password"
        placeholder="password"
        onChange={updatePassword}
      />
      <br />
      <button onClick={createUser}>Add new user</button>
    </div>
  );
}

export default CreateUser;
