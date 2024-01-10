// import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import NavBar from './components/Navbar';
import Timeline from './components/Timeline';
import Graph from "./components/Graph"
import Card from './components/Card';
import TableData from './components/TableData';
import Mydata from './components/mydata';



function App() {
  return (
    <div className="App">

      <Sidebar />
      <span><div> <NavBar /></div></span>
      <div><Timeline /></div>
      <div><Card /></div>

      <div><TableData/></div>
      {/* <div><Graph/></div> */}
    </div>
  );
}

export default App;
