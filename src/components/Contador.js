import { useState } from "react";

function Contador(){

    const [numero, setNumero] = useState(0);

    const sumarContador = () =>{
        setNumero(numero + 1);
    }

    return(
        <div>
            <h1 style={{color:"blue"}}>
                Ejemplo contador
            </h1>
            <h2 style={{color:"blue"}}>
                Contador {numero}
            </h2>
            <button onClick={() => sumarContador()}>Sumar contador</button>
            <button onClick={ () => {
                setNumero(numero -1);
            }

            }>Restar numero</button>
        </div>
    )
}
export default Contador;