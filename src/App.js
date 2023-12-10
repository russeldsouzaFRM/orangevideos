// firebase link - https://orangevideos.web.app/
import "./assets/css/bootstrap.min.css"
import "./assets-new/css/font-awesome.min.css"
// import "./assets/css/main.css"
// import "./assets-new/css/grid.css"
import "./assets-new/css/preset.css"
import "./assets-new/css/animate.css"
import "./assets-new/css/theme_min.css"
import "./assets-new/css/theme.css"
import "./assets-new/css/responsive.css"
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
import AnimatedRoutes from './components/AnimatedRoutes';

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
