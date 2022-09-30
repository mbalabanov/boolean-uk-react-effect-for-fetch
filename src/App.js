import AdviceSection from "./sections/Advice";
import ArtsSection from "./sections/Art";
import UsersSection from "./sections/Users";

import { useState, useEffect } from "react";

import "./styles.css";

function App() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("https://api.artic.edu/api/v1/artworks?page=2&limit=100")
      .then((res) => res.json())
      .then((res) => {
        console.log(res.data);
        setArtworks(res.data);
      });
  }, []);

  return (
    <div className="main-layout">
      <ArtsSection artworks={artworks} />
      <UsersSection />
      <AdviceSection />
    </div>
  );
}

export default App;
