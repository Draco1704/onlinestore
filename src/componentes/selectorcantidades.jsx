import './selectorCantidades.css';
import {useState} from 'react';

function Selector() 
{
    let [cantidad,setCantidad] =useState(1);
    
    
    function decrece(){
        console.log("Boton presionado");
        if (cantidad === 1) return;
        let val = cantidad - 1
        setCantidad(val);
    }

    function incrementa(){
        console.log("Boton presionado");
        let val = cantidad + 1
        setCantidad(val);
    }
    return(
        <div className="selector">
            <button className="btn btn-outline-primary" disabled={cantidad === 1}onClick={decrece}>-</button>
            <label>{cantidad}</label>
            <button className="btn btn-outline-primary" onClick={incrementa}>+</button>
        </div>
    )
}

export default Selector;