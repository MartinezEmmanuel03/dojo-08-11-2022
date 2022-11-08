import { useState } from 'react'
import NavBar from './components/NavBar';

import './App.css';
import AllProduct from './pages/AllProduct';
import Home from './pages/Home';
import OneProduct from './pages/OneProduct';

function App() {
  const [page, setPage] = useState({ name: "Home", id: null })


  return (

    <div className="App">
      {console.log(page)}
      <NavBar setPage={setPage} />
      {page.name === "Home" && <Home handlePage={setPage} />}
      {page.name === "AllProduct" && <AllProduct />}
      {page.name === "OneProduct" && <OneProduct id={page.id} />}
    </div>
  );
}

export default App;
