import { useEffect, useState } from "react";
import { getPuppies } from "../api/index.js";
import NewPlayerForm from "./NewPlayerForm";
import SinglePlayer from "./SinglePlayer";
import { Link } from "react-router-dom";

export default function AllPlayers() {
  const [players, setPlayers] = useState([]);
  const [searchParam, setSearchParam] = useState("");

  useEffect(() => {
    async function fetchData() {
      const playersData = await getPuppies();
      setPlayers(playersData);
    }
    fetchData();
  }, []);

  const filteredPlayers = searchParam
    ? players.filter((player) =>
        player.name.toLowerCase().includes(searchParam.toLowerCase())
      )
    : players;

  return (
    <div className="players-container">
      <h1>Puppy Bowl Players</h1>
      
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search players..."
          onChange={(e) => setSearchParam(e.target.value)}
        />
      </div>

      <NewPlayerForm setPlayers={setPlayers} />

      <div className="players-list">
        {filteredPlayers.map((player) => (
          <SinglePlayer key={player.id} player={player} setPlayers={setPlayers} />
        ))}
      </div>
    </div>
  );
}