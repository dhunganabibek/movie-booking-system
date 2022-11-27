import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";
import Login from "./components/Login/Login";
import BuyTicket from "./components/BuyTicket/BuyTicket";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MovieDisplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyticket" element={<BuyTicket />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
