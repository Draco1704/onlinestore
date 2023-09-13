import './catalogo.css';
import Productos from '../componentes/productos';

function Catalogo(){

    return (
        <div className='catalogo'>
            <h1> Mira nuestos nuevos modelos</h1>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>
            <Productos/>


        </div>
    )
}

export default Catalogo;