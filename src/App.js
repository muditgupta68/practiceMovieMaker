import "./App.css";
import { Routes, Route } from "react-router-dom";
import Error from "./webPage/Error";
import MoviePage from "./webPage/MoviePage";
import HomePage from "./webPage/HomePage";
import Navbar from "./component/common/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/movie/:id" element={<MoviePage />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </div>
  );
}

export default App;
