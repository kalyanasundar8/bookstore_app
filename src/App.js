import { BrowserRouter, Routes, Route } from "react-router-dom";

// Components & pages
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Create from "./pages/Create";
import BookDetails from "./components/BookDetails";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/create' element={<Create />} />
            <Route path='/books/:id' element={<BookDetails />} />
            <Route path='*' element={<NotFoundPage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
