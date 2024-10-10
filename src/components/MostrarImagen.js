import imagen from '../assets/images/loro.jfif';

function MostrarImagen(){
    return(
        <div>
            <h1>Componente donde se muestra la imagen</h1>
            <img src={imagen}></img>
        </div>
    )

}
export default MostrarImagen;