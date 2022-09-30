import { useEffect, useState } from "react";
import ArtList from "./components/ArtList";

function ArtsSection() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=999&limit=3")
      .then((artRes) => artRes.json())
      .then((artRes) => {
        console.log(artRes.data);
        setArtworks(artRes.data);
      });
  }, []);

  return (
    <section>
      <h2>Arts Section</h2>
      <ArtList artworks={artworks} />
    </section>
  );
}

export default ArtsSection;

/*



*/
