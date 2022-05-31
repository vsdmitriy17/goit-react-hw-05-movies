import { Routes, Route } from 'react-router-dom';
import AppBar from './appBar/AppBar.jsx';
import Container from './container/Container.jsx';
import HomePage from './homePage/HomePage.jsx';
import MoviesPage from './moviesPage/MoviesPage.jsx';
// import MovieDetailsPage from './movieDetailsPage/MovieDetailsPage.jsx';
// import BookDetailsView from './views/BookDetailsView';
// import NotFoundView from './notFoundView/NotFoundView.jsx';

export default function App() {
  return (
    <Container>
      <AppBar />

      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="search/" element={<MoviesPage />} />

        {/* <Route path="/search/:movieId" element={<MovieDetailsPage />} />

        <Route element={<NotFoundView />} /> */}
      </Routes>
    </Container>
  );
}
