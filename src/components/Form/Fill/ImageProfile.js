import React from 'react';
import previewPhoto from '../../../images/photo-preview2.jpg';
//código de GetAvatar de ej de Miguel
function ImageProfile(props) {
  const fr = new FileReader();
  const myFileField = React.createRef();

  const uploadImage = (ev) => {
    console.log('La usuaria ha abierto la ventana para elegir ficheros');

    console.log('La usuaria ha elegido los ficheros', ev.currentTarget.files);

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
    console.log('Información útil sobre el fichero cargado', fr);
    const image = fr.result;
    props.updatePhoto(image);
  };

  const photo = props.photo === '' ? previewPhoto : props.photo;

  return (
    <div className="fill__form--image-profile">
      <span className="fill__form--labels">Imagen de perfil*</span>

      <div className="button-box-container">
        <label type="button" htmlFor="add" className="fill__form--button">
          Añadir imagen
          <input
            type="file"
            ref={myFileField}
            onChange={uploadImage}
            name="photo"
            id="add"
            className="profile-upload-btn"
            required
          />
        </label>
        <span
          className="fill__form--box"
          style={{ backgroundImage: `url(${photo})` }}
        ></span>
      </div>
    </div>
  );
}
export default ImageProfile;
