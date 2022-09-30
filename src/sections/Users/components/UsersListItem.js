function UsersListItem(data) {
  console.log("From inside userslistitem");
  console.log(data.user);
  return (
    <li class="bg-blue">
      <img
        src={data.user.picture.medium}
        alt={`${data.user.name.title} ${data.user.name.first} ${data.user.name.last}`}
      />
      <h3>
        {data.user.name.title} {data.user.name.first} {data.user.name.last}
      </h3>
      <p>Email: {data.user.email}</p>
    </li>
  );
}

export default UsersListItem;
