function ImageProfile() {
  return (
    <div className="fill__form--image-profile">
      <span className="fill__form--labels">Imagen de perfil*</span>

      <div className="button-box-container">
        <label className="fill__form--button js__profile-trigger" htmlFor="add">
          Añadir imagen
        </label>
        <input
          type="file"
          name=""
          id="add"
          className="js__profile-upload-btn"
        />
        <span className="fill__form--box js__profile-preview"></span>
      </div>
    </div>
  );
}
export default ImageProfile;
