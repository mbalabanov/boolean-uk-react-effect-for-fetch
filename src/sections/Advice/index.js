import { useEffect, useState } from "react";
import AdviceSlip from "./components/AdviceSlip";
import FavoriteSlipsList from "./components/FavoriteSlipsList";

function AdviceSection() {
  const [advice, setAdvice] = useState({});
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    triggerRequest();
  }, []);

  const triggerRequest = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((adviceRes) => adviceRes.json())
      .then((adviceRes) => {
        setAdvice(adviceRes.slip);
      });
  };

  const saveFavorite = (argument) => {
    if (!favorites.includes(argument)) {
      setFavorites([...favorites, argument]);
    }
  };

  return (
    <section>
      <h2>Advice Section</h2>
      <section className="advice-slip">
        <h3>Some Advice</h3>
        <AdviceSlip key={advice.id} props={advice.advice} />
        <button onClick={() => triggerRequest()}>Get More Advice</button>
        <button onClick={() => saveFavorite(advice.advice)}>
          Save to Favorites
        </button>
      </section>
      <section className="favorite-slips-list">
        <h3>Favourite Advice Slips</h3>
        <ul>
          {favorites.map((favoriteListItem, index) => (
            <FavoriteSlipsList
              key={`advice${index}`}
              favoriteItem={favoriteListItem}
            />
          ))}
        </ul>
      </section>
    </section>
  );
}

export default AdviceSection;
