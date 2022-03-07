function UserList(props) {
  function deleteUser(user) {
    const filtered = props.users.filter((u) => u.email !== user.email);
    props.setUsers(filtered);
  }
  return (
    <ul>
      {props.users.map((user) => (
        <li key={user.email}>
          {user.name} {user.email}
          <button
            style={{ margin: "0px,1em" }}
            onClick={() => deleteUser(user)}
          >
            X
          </button>
        </li>
      ))}
    </ul>
  );
}

export default UserList;
