import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/header";
import { FavoritePage } from "./pages/Favorite";
import HomePage from "./pages/HomePage";
import { SearchPage } from "./pages/Search";
import { MovieContainer } from "./components/styleComponents/styledComponents";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { InitializeData } from "./redux/slice";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(InitializeData());
  }, []);
  // const nowPlayingList = useSelector((state) => state.nowInCinema);
  // console.log(nowPlayingList);
  return (
    <div>
      <Router>
        <Header />
        <MovieContainer>
          <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/search" element={<SearchPage />} />

            <Route path="/favorite" element={<FavoritePage />} />
          </Routes>
        </MovieContainer>
      </Router>
    </div>
  );
}

export default App;
