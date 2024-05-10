import './App.css';
import Nav from './components/Nav';
import NewBill from './components/NewBill'
import { database, ref, set, push, get, child, update, remove} from './firebase'

function App() {
  return (
    <div className="App">
      <Nav />
      <NewBill />
    </div>
  );
}

export default App;
