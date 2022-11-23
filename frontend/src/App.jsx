import Homepage from "./components/Homepage/Homepage";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import MovieDisplay from "./components/MovieDisplay/MovieDisplay";
import Login from "./components/Login/Login";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/movies" element={<MovieDisplay />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
