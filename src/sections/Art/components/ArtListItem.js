import SubjectList from "./SubjectList";

function ArtListItem({ props }) {
  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${props.image_id}/full/843,/0/default.jpg`}
          alt={props.title}
        />
      </div>
      <h3>{props.title}</h3>
      <p>Artist: {props.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {props.term_titles.map((term, key) => (
          <SubjectList data={term} id={`${props.image_id}${key}`} />
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
