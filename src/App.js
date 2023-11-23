import './App.css';
import AnimatedRoutes from './components/AnimatedRoutes';
import Footer from './components/Footer';
// import Home from "./components/Home"
import NavBar from './components/NavBar';
// firebase link - https://orangevideos.web.app/
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <AnimatedRoutes />
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
