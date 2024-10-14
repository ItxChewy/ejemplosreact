import './SumarNumeros.css'
function SumarNumeros(props){

    const sumarAmbosNumeros = () =>{
        var num1 = parseInt(props.numero1);
        var num2 = parseInt(props.numero2);
        var suma = num1 + num2;
        console.log("la suma del valor " + num1 + " + " + num2 +" = " + suma)

    }
    return(
        <div>
            <h1 className='prueba'>Componente SumarNumeros</h1>
            <button onClick={() => sumarAmbosNumeros()}>Sumar {props.numero1} + {props.numero2}</button>
            <button onClick={() => sumarAmbosNumeros()}>Sumar {props.numero1} + {props.numero2}</button>
        </div>
    )
}
export default SumarNumeros;