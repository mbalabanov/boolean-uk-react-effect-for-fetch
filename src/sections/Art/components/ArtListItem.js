function ArtListItem(props) {
  const artwork = props.props;

  return (
    <li>
      <div className="frame">
        <img
          src={`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`}
          alt={artwork.title}
        />
      </div>
      <h3>{artwork.title}</h3>
      <p>Artist: {artwork.artist_title}</p>
      <h4>Artistic Subjects:</h4>
      <ul>
        {artwork.term_titles.map((term, i) => (
          <li key={i}>{term}</li>
        ))}
      </ul>
    </li>
  );
}

export default ArtListItem;
