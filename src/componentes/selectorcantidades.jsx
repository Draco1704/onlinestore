function Selector() 
{

    function decrece(){
        console.log("Boton presionado");
    }

    function incrementa(){
        console.log("Boton presionado");
    }
    return(
        <div className="selector">
            <button onClick={decrece}>-</button>
            <button>1</button>
            <button onClick={incrementa}>+</button>
        </div>
    )
}

export default Selector;