import React from "react";
import defaultAvatar from "../../../images/photo-preview2.jpg";

const ImageProfile = (props) => {
  // creamos una propiedad de la clase que es la que vamos a usar en varios métodos para cargar la imagen
  // esto es un manejador de ficheros
  let fr = new FileReader();

  // creamos un React.createRef porque React no gestiona los <input type="file" /> por ello tenemos que gestionarlo por nuestra cuenta
  const myFileField = React.createRef(); // this.myFileField = document.querySelecto('input')

  // estos son los bind normales que siempre ponemos
  const uploadImage = (ev) => {
    // cuando pulsamos en la label o en <input type="file" />:
    // 1º se abre la ventana de nuestro ordenador para elegir un fichero
    // 2º cuando la usuaria elije un fichero se ejecuta este método manejador de eventos
    console.log("La usuaria ha abierto la ventana para elegir ficheros");

    // cuando se abre la ventana de nuestro navegador podemos elegir uno o varios ficheros por ello ev.currentTarget.files es una array
    console.log("La usuaria ha elegido los ficheros", ev.currentTarget.files);

    // para este ejercicio nos interesa solo el primero de los ficheros elegidos por la usuaria, por eso ponemos [0]
    // este primer fichero es un objeto con información útil del fichero como: nombre, última modificación, tamaño del fichero...
    // este objeto no tiene información privada del ordenador de la usuaria, por ejemplo no tenemos información de la carpeta en la que está la imagen
    console.log(
      "El primero de los ficheros elegidos es",
      ev.currentTarget.files[0]
    );

    // compruebo si la usuaria ha elegido al menos un fichero
    if (ev.currentTarget.files.length > 0) {
      // guardo el primer fichero en myFile
      const myFile = ev.currentTarget.files[0];

      // añado un evento load al manejador de ficheros
      // por qué añado un evento, pues porque esto es una acción asíncrona, imaginemos que el fichero pesa 5 Gb, el navegador puede tardar unos cuantos segundos en cargar y procesar el fichero, por eso le decimos "navegador, cuando termines de cargar el fichero me ejecutas el método this.image"
      fr.addEventListener("load", getImage);

      // le digo al manejador de ficheros que maneje, que cargue el fichero
      fr.readAsDataURL(myFile);
    }
    // si la usuaria no ha elegido ningún fichero y ha puslado en cerrar la ventana de nuestro ordenador, no hago nada
  };

  const getImage = () => {
    // cuando el navegador termina de manejar el fichero se ejecuta este método porque lo hemos indicado en this.fr.addEventListener('load', this.getImage);

    // this.fr guarda información útil sobre el fichero cargado

    // this.fr.result contiene los datos del fichero en un formato que se llama base64 que nos vale por que podemos usarlo para pintar una imagen en HTML
    const image = fr.result;

    // aquí hago lifting con los datos del fichero
    // lo que haga el componente madre con esta información es otro problema diferente
    props.handleInputLifting(image, "photo");
  };

  const avatar = props.avatar === "" ? defaultAvatar : props.avatar;
  return (
    <div className="fill__form--image-profile">
      <span className="fill__form--labels">Imagen de perfil*</span>

      <div className="button-box-container">
        <label className="fill__form--button" htmlFor="add">
          Añadir imagen
        </label>
        <input
          type="file"
          name=""
          id="add"
          ref={myFileField}
          onChange={uploadImage}
          className="profile-upload-btn"
          style={{ backgroundImage: `url(${avatar})` }}
        />
        <span className="fill__form--box "></span>
      </div>
    </div>
  );
};
export default ImageProfile;
