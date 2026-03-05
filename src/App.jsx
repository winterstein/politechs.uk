import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Landing from './pages/Landing';
import Events from './pages/Events';
import RelatedGroups from './pages/RelatedGroups';
import './styles/main.scss';

export default function App() {
  return (
    <BrowserRouter>
      <div className="d-flex flex-column min-vh-100">
        <Header />
        <div className="flex-grow-1">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/events" element={<Events />} />
            <Route path="/groups" element={<RelatedGroups />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
