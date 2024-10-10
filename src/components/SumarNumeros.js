import './SumarNumeros.css'
function SumarNumeros(){

    const sumarAmbosNumeros = (num1, num2) =>{
        var suma = num1 + num2;
        console.log("la suma del valor " + num1 + " + " + num2 +" = " + suma)

    }
    return(
        <div>
            <h1 className='prueba'>Componente SumarNumeros</h1>
            <button onClick={() => sumarAmbosNumeros(5,4)}>Sumar 5 y 4</button>
            <button onClick={() => sumarAmbosNumeros(1,3)}>Sumar 1 y 3</button>
        </div>
    )
}
export default SumarNumeros;