import Navbar from './componentes/navbar';
import './App.css';
import Footer from './componentes/footer';
import Catalogo from './paginas/catalogo';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Super venta de carros</h1>
      <Catalogo/>
      <Footer></Footer>
    </div>
  );
}
export default App;
