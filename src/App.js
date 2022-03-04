import './App.css';
import './Responsive.css';
import Menu from './components/Menu';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topnav from './components/Topnav';
import Slider from './components/Slider';
import MobileMenu from './components/MobileMenu';
import MiddleMenu from './components/MiddleMenu';

function App() {
  return (
    <div className='main_demo'>
    <Topnav />
    <MiddleMenu />
      <Menu />
      <MobileMenu />
      <Slider />
    </div>
  );
}

export default App;
