import { useState, useEffect } from "react";
import PlantCard from "./components/PlantCard";
import genericPlant from "./assets/generic_plant.jpg";
import plantContainer from "./components/PlantContainer.module.scss";

const App = () => {
  const [plantData, setPlants] = useState([]);
  useEffect(() => {
    const fetchPlants = async () => {
      try {
        const url = `https://perenual.com/api/species-list?key=${
          import.meta.env.REACT_APP_PERENUAL_API_KEY
        }`;
        const response = await fetch(url);
        const data = await response.json();
        setPlants(data.data);
      } catch (error) {
        console.error("Error fetching plants:", error);
      }
    };
    fetchPlants();
  }, []);

  return (
    <div className="App">
      <div className={plantContainer.card}>
        <h1>Plants</h1>
        <div className={plantContainer.card__grid}>
          {Array.isArray(plantData) && plantData.length > 0 ? (
            plantData.map((plant) => (
              <PlantCard
                key={plant.id}
                plantName={plant.common_name}
                latinName={plant.latin_name}
                imageUrl={plant.default_image?.small_url || genericPlant}
              />
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
