import logo from './logo.svg';
import './App.css';
import Navbar from './components/header/Navbar';
import Brand from './components/header/Brand';
import CardItem from './components/items/CardItem';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <CardItem/>
      <h2> Bienvenido </h2>
    </div>
  );
}

export default App;
