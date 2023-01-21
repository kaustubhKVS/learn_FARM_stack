import Navbar from './Navbar';
import Home from './Home';

function App() {

  return (
    <div className="App">
        <Navbar></Navbar>

        <div className="content">
          <Home></Home>
        </div>
      
    </div>
  );
}

export default App;
