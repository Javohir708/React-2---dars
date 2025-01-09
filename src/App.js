// import logo from './logo.svg';
import './App.css';
import './global/reset.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Delivery from './components/delivery/Delivery';
import Info from './components/info/Info';
import Product from './components/product/Product';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Delivery/>
      <Info/>
      <Product/>
    </div>
  );
}

export default App;
