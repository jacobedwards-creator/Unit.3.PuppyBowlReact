import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getPuppydetails } from "../api";

export default function PlayerDetails() {
  const { id } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    async function fetchPlayer() {
      const playerData = await getPuppydetails(id);
      setPlayer(playerData);
    }
    fetchPlayer();
  }, [id]);

  if (!player) return <div>Loading...</div>;

  return (
    <div className="player-details">
      <h2>{player.name}</h2>
      <img src={player.imageUrl} alt={player.name} />
      <p>Breed: {player.breed}</p>
      <p>Status: {player.status}</p>
      <p>Team: {player.team?.name || "No team"}</p>
      <Link to="/" className="back-btn">
        Back to All Players
      </Link>
    </div>
  );
}