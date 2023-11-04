import './productos.css';
import Selector from './selectorcantidades';

function Productos(props)
{
    return(
        <div className="productos">
            <img src={"/imagenes/" + props.data.imagen}></img>
            <h5>{props.data.nombre}</h5>
            <div className='precios'>
                <label>Precio: {props.data.precio}</label>
                <label>Total: {props.data.precio}</label>

            </div>
        <Selector/>
        <button className='btn btn-success'>Agregar</button>
        </div>
        
    )
}

export default Productos;