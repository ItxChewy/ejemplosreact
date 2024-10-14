import Matematicas from "./Matematicas";
function PadreMatematicas(){

    const tripleNumero = (numero) => {
        var num = numero;
        var operacion = num * 3;
        console.log("el triple es: " + operacion);
    }

    return(
        <div>
            <h1>Padre Matematicas</h1>
            <Matematicas numero="3" tripleNumero={tripleNumero}/>
        </div>
    )
}
export default PadreMatematicas;