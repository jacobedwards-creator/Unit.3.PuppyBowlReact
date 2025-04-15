import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AllPlayers from "./components/AllPlayers";
import PlayerDetails from "./components/PlayerDetails";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<AllPlayers />} />
          <Route path="/players/:id" element={<PlayerDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;