import logo from './logo.svg';
import './App.css';
import Header from "./components/Header.js"
import Navbar from './components/Navbar';
import FramerMotion from './components/FramerMotion';
import LandingPages from './components/LandingPages';
import Feature from './components/Feature';
import Footer from './components/Footer';
import Carousel from './components/Carousel';
import NavRes from './components/NavRes';
import CaraousalTest from './components/CaraousalTest';
// import ShowNav from './components/ShowNav';

function App() {
  return (
    
    <div className="App">
      <div className='totalHeader'>
      <Header/>
      <NavRes/>
      </div>
     
      <FramerMotion/>
      <Carousel/>
      <LandingPages/>
      <Feature/>
      <hr/>
      <Footer/> 
      {/* <CaraousalTest/> */}
</div>

      
    
      

     
     
  );
}

export default App;
