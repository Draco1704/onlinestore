import Navbar from './componentes/navbar';
import './App.css';
import Footer from './componentes/footer';
import Catalogo from './paginas/catalogo';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";



function App() {
  return (
    <div className="App">
      <Navbar/>
      <h1>Venta especial de minis para tus campañas</h1>
      <Catalogo/>
      <Footer></Footer>
    </div>
  );
}
export default App;
