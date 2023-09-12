import Navbar from './componentes/navbar';
import './App.css';
import Footer from './componentes/footer';
import Selector from './componentes/selectorcantidades';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Hola desde react</h1>
      <Selector/>
      <Footer></Footer>
    </div>
  );
}
export default App;
