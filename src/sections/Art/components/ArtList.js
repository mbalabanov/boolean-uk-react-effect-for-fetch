import ArtListItem from "./ArtListItem";

function ArtList(data) {
  return (
    <ul className="art-list">
      {data.artworks.map((artwork, index) => (
        <ArtListItem props={artwork} id={index} />
      ))}
    </ul>
  );
}

export default ArtList;
