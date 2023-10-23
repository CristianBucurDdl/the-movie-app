import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

import Header from "./components/header";
import { FavoritePage } from "./pages/Favorite";
import HomePage from "./pages/HomePage";
import { SearchPage } from "./pages/Search";
import { MovieContainer } from "./components/styleComponents/styledComponents";

function App() {
  return (
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
  );
}

export default App;
