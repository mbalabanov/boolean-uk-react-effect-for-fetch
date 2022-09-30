function SubjectList({ data, id }) {
  return (
    <li key={id} id={id}>
      {data}
    </li>
  );
}

export default SubjectList;
