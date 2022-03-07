import { NavLink } from "react-router-dom";

function Navigation(props) {
  function logout(e) {
    props.setUser(null);
  }
  return (
    <nav style={{ background: "#eee", padding: "1.3em" }}>
      <NavLink to="/">Home</NavLink> - <NavLink to="/create">Add user</NavLink>{" "}
      - <NavLink to="/reporting">Reporting</NavLink> -{" "}
      <NavLink to="/logout" onClick={logout}>
        Logout
      </NavLink>
    </nav>
  );
}

export default Navigation;
