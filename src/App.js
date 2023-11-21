import './App.css';
import DropdownMenu from './components/DropNav';
import Footer from './components/Footer';
import Home from "./components/Home"
import NavBar from './components/NavBar';

function App() {
  return (
    <div className="App">
      {/* <DropdownMenu /> */}
      <NavBar />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
