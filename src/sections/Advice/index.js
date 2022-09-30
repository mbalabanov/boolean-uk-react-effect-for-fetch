import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";

function AdviceSection() {
  const [advice, setAdvice] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    fetch("https://api.adviceslip.com/advice")
      .then((adviceRes) => adviceRes.json())
      .then((adviceRes) => {
        setAdvice(adviceRes.slip);
      });
  }, []);

  const saveFavorite = (argument) => console.log(argument);

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <AdviceSlip key={advice.id} props={advice.advice} />
        <button>Get More Advice</button>
        <button key="Oasch" onClick={() => saveFavorite("Clicky")}>
          Save to Favorites
        </button>
      </section>
      <section className="favourtite-slips-list"></section>
    </section>
  );
}

export default AdviceSection;
