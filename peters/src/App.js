import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';


function App() {
  return (
    <div className="App">
     
      <Sidebar/>
      <span><div> <NavBar/></div></span>
    </div>
  );
}

export default App;
