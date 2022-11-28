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
import Home from './components/Home';


// import ShowNav from './components/ShowNav';

function App() {
  return (
    
    <div className="App">
      <div className='totalHeader'>
      <Header/>
      <NavRes/>
      </div>
      <Home/>
      {/* <FramerMotion/> */}
      <Carousel/>
      <LandingPages/>
      <Feature/>
      <hr/>
      <Footer/> 
     
</div>





      
    
      

     
     
  );
}

export default App;
