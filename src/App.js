import "./App.css";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Main from "./components/Main.jsx";
import { useEffect, useState } from "react";

const userLocal = localStorage.getItem("user");
const defaultUser = userLocal ? JSON.parse(userLocal) : null;
function App() {
  const [user, setUser] = useState(defaultUser);
  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(user));
  }, [user]);
  return (
    <div className="App">
      <Header />
      <Navigation setUser={setUser} />
      <Main user={user} setUser={setUser} />
    </div>
  );
}

export default App;
