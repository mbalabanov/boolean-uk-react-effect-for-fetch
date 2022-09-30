import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=999&limit=10")
      .then((artRes) => artRes.json())
      .then((artRes) => {
        setArtworks(artRes.data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        <ArtList artworks={artworks} />
      </div>
    </section>
  );
}

export default ArtsSection;

/*



*/
