import './catalogo.css';
import Productos from '../componentes/productos';
//hook
import { useEffect, useState } from 'react';
import DataService from '../servicios/dataService';

function Catalogo(){
    const [productos,setproductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [prodsMostrar, setProdsMostrar] = useState([]);

    //carga de componente
    useEffect(function(){
        console.log("componente cargado");
        cargaCatalogo();
    },[]);

    function cargaCatalogo()
    {
    let servicio = new DataService();
    let prods = servicio.getProducts();
    console.log(prods);
    setproductos(prods);
    let cats= ["Sedan","SUV"];
    setCategorias(cats);    
    setProdsMostrar(prods);
    }

function filtro(categorias)
{
    console.log(categorias);
    let lista = [];
    //encontrar categoria qeu concuerde con producto
    for (let i=0; i<productos.length; i++)
    {
        let prod = productos [i];
        if (prod.categoria === categorias)
        {
            lista.push(prod);
        }

        console.log(lista);
        setProdsMostrar(lista);
    }
}

function borrarFiltros(){
    setProdsMostrar(productos);

}

    return (
        <div className='catalogo'>
            <h1> Mira nuestos {productos.length} nuevos modelos</h1>
            <br/>
            <button onClick={borrarFiltros} className='btn btn-dark btn-filter'>Todo</button>
            {categorias.map(c =><button key ={c} onClick={() => filtro(c)} className='btn btn-sm btn-primary btn-filter'>{c}</button>)}
            <br/>
            {prodsMostrar.map(p => <Productos key ={p.id} data={p}/>)}

        </div>
    )
}

export default Catalogo;