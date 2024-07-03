import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import MyNavBar from "./components/MyNavBar";
import MyFooter from "./components/MyFooter";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import TvShows from "./components/TvShows";
import NotFound from "./components/NotFound";
import MovieDetails from "./components/MovieDetails";

const App = () => {
  return (
    <div className="text-white" style={{ backgroundColor: "#141414" }}>
      <BrowserRouter>
        <MyNavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tvshows" element={<TvShows />} />
          <Route path="details/:id" element={<MovieDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <MyFooter />
      </BrowserRouter>
    </div>
  );
};

export default App;
