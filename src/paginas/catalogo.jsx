import './catalogo.css';
import Productos from '../componentes/productos';
//hook
import { useEffect, useState } from 'react';
import DataService from '../servicios/dataService';

function Catalogo(){
    const [productos,setproductos] = useState([]);

    useEffect(function(){
        console.log("componente cargado");
        cargaCatalogo();
    },[]);

    function cargaCatalogo(){
    let servicio = new DataService();
    let prods = servicio.getProducts();
    console.log(prods);
    setproductos(prods);
    }

    return (
        <div className='catalogo'>
            <h1> Mira nuestos {productos.length} nuevos modelos</h1>
            <br/>
            {productos.map(p => <Productos data ={p}/>)}
            

        </div>
    )
}

export default Catalogo;