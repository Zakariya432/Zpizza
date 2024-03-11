import logo from './logo.svg';
import './App.css';
import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Navbar from './Components/Navbar';
import {BrowserRouter,Routes,Route} from  'react-router-dom';
import Homescreen from './screens/Homescreen';

function App() {
  return (
    <div className="App">
    <Navbar/>
    <Homescreen/>
    </div>
  );
}

export default App;
