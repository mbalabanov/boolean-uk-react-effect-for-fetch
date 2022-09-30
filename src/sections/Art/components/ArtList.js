import ArtListItem from "./ArtListItem";

function ArtList({ artworks }) {
  return (
    <ul className="art-list">
      {artworks.map((artwork, index) => (
        <ArtListItem props={artwork} key={`${artwork.image_id}key${index}`} />
      ))}
    </ul>
  );
}

export default ArtList;
