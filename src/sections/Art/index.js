import { useEffect, useState } from "react";

function ArtsSection(props) {
  console.log(props);
  return (
    <section>
      <h2>Arts Section</h2>
      <div className="scroll-container">
        {props.artworks.map((artwork, i) => (
          <p key={i}>{artwork.title}</p>
        ))}
      </div>
    </section>
  );
}

export default ArtsSection;
