import { useState } from "react";
import "./plantCard.scss";
import PropTypes from "prop-types";

const PlantCard = ({ plantName, latinName, imageUrl }) => {
  const [userPlantName, setUserPlantName] = useState("");

  const handleWatering = () => {
    alert("Watering tracked!");
  };

  const handleTipsPopup = () => {
    alert("Here are some tips and care instructions!");
  };

  return (
    <div className="card">
      <h2>{plantName}</h2>
      <input
        type="text"
        placeholder="Name your plant"
        value={userPlantName}
        onChange={(e) => setUserPlantName(e.target.value)}
        className="input"
      />
      <img src={imageUrl} alt={plantName} className="image" />
      <p>
        <em>{latinName}</em>
      </p>
      <button onClick={handleWatering} className="button">
        Track Watering
      </button>
      <button onClick={handleTipsPopup} className="button">
        Tips & Care
      </button>
    </div>
  );
};

export default PlantCard;

PlantCard.propTypes = {
  plantName: PropTypes.string.isRequired,
  latinName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
};
