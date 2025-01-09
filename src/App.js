// import logo from './logo.svg';
import './App.css';
import './global/reset.css'
import Header from './components/header/Header';
import Hero from './components/hero/Hero';
import Delivery from './components/delivery/Delivery';

function App() {
  return (
    <div className="App">
      <Header/>
      <Hero/>
      <Delivery/>
    </div>
  );
}

export default App;
