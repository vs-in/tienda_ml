import "./App.css";
import Navbar from "./components/header/Navbar";
import ContainerCardItems from "./components/items/ContainerCardItems/ContainerCardItems";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import DetailsItem from "./components/items/DetailsItem/DetailsItem";


function App() {
  return (
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={ <ContainerCardItems />} />
          <Route path='/item/:idItem' element={ <DetailsItem />} />
          <Route path='/category/:idCategory' element={ <ContainerCardItems />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;