import ArtListItem from "./ArtListItem";

function ArtList({ artworks }) {
  return (
    <ul className="art-list">
      {artworks.map((artwork) => (
        <ArtListItem props={artwork} key={artwork.image_id} />
      ))}
    </ul>
  );
}

export default ArtList;
