import ArtListItem from "./ArtListItem";

function ArtList({ artworks }) {
  return (
    <ul className="art-list">
      {artworks.map((artwork, index) => (
        <ArtListItem props={artwork} id={index} />
      ))}
    </ul>
  );
}

export default ArtList;
