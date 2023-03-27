import './App.css';
import Header from './components/Header/Header';
import SearchBar from './components/SearchBar/SearchBar';
import { Routes, Route } from 'react-router-dom'


function App() {
  let companyName = "Viren Corp"
  return (
    <div className="App">
      <Header companyName={companyName} />

      <Routes>
        <Route path="/search" element={<SearchBar />}>
          Search Detail
        </Route>
      </Routes>

    </div>

  );
}

export default App;
