import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import '../node_modules/bootstrap/js/dist/dropdown';
import Navbar from './components/navbar'; 
function App() {
  return (
    <div className="App">
    <FontAwesomeIcon icon="fa-solid fa-cart-shopping" />
    <Navbar
    />
    </div>
  );
}
export default App;
