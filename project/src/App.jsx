import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Main from "./components/Main";
import HomePage from './pages/HomePage';
import Details from './pages/Details';
import NotFound from './pages/NotFound';
import { useState } from 'react';


function App() {
  const [countries, setCountries] = useState([]);

console.log('countries', countries)
  return (
    <>
      <Header />
      <Main>
        <Routes>
          <Route path="/" element={<HomePage countries={countries} setCountries={setCountries} />} />
          <Route path="/country/:name" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Main>
    </>
  );
}

export default App;



