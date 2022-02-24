import './App.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/Topnav';
import Slider from './components/Slider';

function App() {
  return (
    <div className='main_demo'>
    <Topnav />
      <Menu />
      <Slider />
    </div>
  );
}

export default App;
