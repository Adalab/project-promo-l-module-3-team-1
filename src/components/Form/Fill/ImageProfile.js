import React from 'react';
import previewPhoto from '../../../images/photo-preview2.jpg';

function ImageProfile(props) {
  /*   const handleInputImage = (event) => {
    props.handleInput(event.target.name, event.target.value);
    console.log(event.target.name, event.target.value);
  }; */

  let fr = new FileReader();
  let myFileField = React.createRef();

  const uploadImage = (ev) => {
    /*   console.log('La usuaria ha abierto la ventana para elegir ficheros');
    console.log('La usuaria ha elegido los ficheros', ev.currentTarget.files); */
    console.log(
      'El primero de los ficheros elegidos es',
      ev.currentTarget.files[0]
    );

    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener('load', getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    /* console.log('Información útil sobre el fichero cargado', fr); */
    const image = fr.result;
    /* console.log(fr); */
    props.updateAvatar(image);
  };

  const imageSelected = props.image === '' ? previewPhoto : props.image;
  console.log(imageSelected);

  return (
    <div className="fill__form--image-profile">
      <span className="fill__form--labels">Imagen de perfil*</span>

      <div className="button-box-container">
        <label className="fill__form--button" htmlFor="add">
          Añadir imagen
        </label>
        <input
          type="file"
          ref={myFileField}
          name="image"
          id="add"
          onChange={uploadImage}
          className="profile-upload-btn"
        />
        <span
          className="fill__form--box "
          style={{ backgroundImage: `url(${previewPhoto})` }}
        ></span>
      </div>
    </div>
  );
}
export default ImageProfile;
