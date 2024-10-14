function Matematicas(props){
    
    var ejecutarPadre = props.tripleNumero;
    var numero = parseInt(props.numero);

    const dobleNumero = () => {
        var operacion = numero * 2;
        console.log("el doble es: " + operacion)
    }

    return(
        <div>
            <button onClick={() => dobleNumero() }>Doble de {numero} </button><br/>
            <button onClick={() => ejecutarPadre(numero) } >Triple de {numero}</button>
        </div>
    )
}
export default Matematicas;