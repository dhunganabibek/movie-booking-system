import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";
import Login from "./components/Login/Login";
import BuyTicket from "./components/BuyTicket/BuyTicket";
import Signup from "./Signup/Signup";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MovieDisplay />} />
          <Route path="/login" element={<Login />} />
          <Route path="/buyticket" element={<BuyTicket />} />
          <Route path="/signup" element={<Signup />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
