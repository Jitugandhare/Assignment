import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';
import Timeline from './components/Timeline';


function App() {
  return (
    <div className="App">
     
      <Sidebar/>
      <span><div> <NavBar/></div></span>
      <div><Timeline/></div>
    </div>
  );
}

export default App;
