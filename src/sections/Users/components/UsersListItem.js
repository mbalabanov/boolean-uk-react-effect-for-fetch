function UsersListItem(data) {
  return (
    <li className={`${data.user.gender === "female" ? "bg-pink" : "bg-blue"}`}>
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
