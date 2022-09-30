import UsersListItem from "./UsersListItem";

function UsersList(data) {
  return (
    <ul className="users-list">
      {" "}
      {data.users.map((user) => (
        <UsersListItem user={user} key={user.login.uuid} />
      ))}
    </ul>
  );
}

export default UsersList;
