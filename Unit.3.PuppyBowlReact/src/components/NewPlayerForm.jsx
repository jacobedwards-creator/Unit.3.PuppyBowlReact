import { useState } from "react";
import { addPuppy } from "../api";

export default function NewPlayerForm({ setPlayers }) {
  const [formData, setFormData] = useState({
    name: "",
    breed: "",
    status: "bench",
    imageUrl: "" 
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addPuppy(formData);
      const updatedPlayers = await getPuppies();
      setPlayers(updatedPlayers);
     
      setFormData({
        name: "",
        breed: "",
        status: "bench",
        imageUrl: ""
      });
    } catch (error) {
      console.error("Error adding player:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="player-form">
      <h2>Add New Player</h2>
      <input
        type="text"
        placeholder="Name"
        value={formData.name}
        onChange={(e) => setFormData({...formData, name: e.target.value})}
        required
      />
      <input
        type="text"
        placeholder="Breed"
        value={formData.breed}
        onChange={(e) => setFormData({...formData, breed: e.target.value})}
        required
      />
      <input
        type="url" 
        placeholder="Image URL (optional)"
        value={formData.imageUrl}
        onChange={(e) => setFormData({...formData, imageUrl: e.target.value})}
      />
      <select
        value={formData.status}
        onChange={(e) => setFormData({...formData, status: e.target.value})}
      >
        <option value="bench">Bench</option>
        <option value="field">Field</option>
      </select>
      <button type="submit">Add Player</button>
    </form>
  );
}