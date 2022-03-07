import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import CreateUser from "./CreateUser.jsx";
import UserList from "./UserList.jsx";

//read the localStorage

const usersLocal = localStorage.getItem("users");

const defaultUsers = usersLocal ? JSON.parse(usersLocal) : [];

function Main(props) {
  //1.Hooks
  //status of user (logged in or not)

  const [users, setUsers] = useState(defaultUsers);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  //2.Internal functions
  function handleLogin() {
    alert("Login successful");
    props.setUser({ id: 1, email: "hello@hithere.de" });
  }
  //3. Return(s)
  //define what's happening if logged in or not
  if (!props.user) {
    return (
      <main style={{ padding: "1.3em" }}>
        <input type="email" name="email" placeholder="email" />
        <br />
        <input type="password" name="password" placeholder="password" />
        <br />
        <button onClick={handleLogin}>submit</button>
      </main>
    );
  }
  return (
    <main style={{ padding: "1.3em" }}>
      <Routes>
        <Route index element={<UserList users={users} setUsers={setUsers} />} />
        <Route
          path="create"
          element={<CreateUser users={users} setUsers={setUsers} />}
        />
        <Route path="report" element={<p>Reporting</p>} />
        <Route path="*" element={<p>Error 404: Page not found.</p>} />
      </Routes>
    </main>
  );
}

export default Main;
