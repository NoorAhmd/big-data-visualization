import './App.scss';
import Chartjs from './Chartjs';
import Navbar from './Navbar';
import SidebarFilter from './SidebarFilter';
import { Button } from 'primereact/button';

function App() {
  return (
    <div className="App">
      {/* <Chartjs/> */}
      {/* <iframe
        src="http://192.168.20.203:8088?standalone=true"
      >
      </iframe> */}
      <div className="navbar">
        <Navbar />
      </div>
      <div className="container">
        <div className="sidebar">
          <SidebarFilter />
        </div>
        <div className="charts">
          <Chartjs />
          <Button>abc</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
