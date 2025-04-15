import { Link } from "react-router-dom";
import { deletePuppy } from "../api";

export default function SinglePlayer({ player, setPlayers }) {
  const handleDelete = async () => {
    try {
      await deletePuppy(player.id);
      const updatedPlayers = await getPuppies();
      setPlayers(updatedPlayers);
    } catch (error) {
      console.error("Error deleting player:", error);
    }
  };

  return (
    <div className="player-card">
      <h3>{player.name}</h3>
      <p>Breed: {player.breed}</p>
      <img src={player.imageUrl} alt={player.name} />
      <div className="player-actions">
        <Link to={`/players/${player.id}`} className="details-btn">
          View Details
        </Link>
        <button onClick={handleDelete} className="delete-btn">
          Delete
        </button>
      </div>
    </div>
  );
}