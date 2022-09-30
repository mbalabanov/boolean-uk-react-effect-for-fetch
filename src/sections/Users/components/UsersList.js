import UsersListItem from "./UsersListItem";

function UsersList(data) {
  console.log(data.users);
  return (
    <ul class="users-list">
      {" "}
      {data.users.map((user) => (
        <UsersListItem user={user} key={user.login.uuid} />
      ))}
    </ul>
  );
}

export default UsersList;
