import React from "react";
import previewPhoto from "../../../images/photo-preview2.jpg";

function ImageProfile(props) {
  let fr = new FileReader();
  let myFileField = React.createRef();

  const uploadImage = (ev) => {
    if (ev.currentTarget.files.length > 0) {
      const myFile = ev.currentTarget.files[0];
      fr.addEventListener("load", getImage);
      fr.readAsDataURL(myFile);
    }
  };

  const getImage = () => {
    const image = fr.result;
    props.updateAvatar(image);
  };

  const imageSelected = !props.image ? previewPhoto : props.image;

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
          style={{ backgroundImage: `url(${imageSelected})` }}
        ></span>
      </div>
    </div>
  );
}
export default ImageProfile;
