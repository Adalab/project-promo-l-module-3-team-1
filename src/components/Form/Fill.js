import CollapsHeader from './CollapsHeader';
import Input from './Inputs';

function Fill() {
  return (
    <section className="fill js-collapsable-container collapsable--close">
      <CollapsHeader icon="fa-keyboard-o" title="Rellena" />
      <div className="hidden__container fill__form">
        <Input
          name="fullName"
          label="Nombre completo*"
          placeholder="Ej: Sally Jill"
          classname="js-name js-input-name"
        />
        <Input
          name="position"
          label="Puesto*"
          placeholder="Ej: Front-end unicorn"
          className=" js-position js-input-job"
        />

        <div className="fill__form--image-profile">
          <span className="fill__form--labels">Imagen de perfil*</span>

          <div className="button-box-container">
            <label
              className="fill__form--button js__profile-trigger"
              htmlFor="add"
            >
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

        <Input
          name="emailAddress"
          label="Email*"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
          className="js-input-email"
          value=" "
        />

        <Input
          name="telephone"
          label="Teléfono*"
          type="tel"
          placeholder="Ej: 555-55-55-55"
          className="js-input-phone"
        />

        <Input
          name="linkedin"
          label="Linkedin*"
          type="url"
          placeholder="Ej: linkedin.com/in/sally.hill"
          className=" js-input-linkedin"
        />

        <Input
          name="github"
          label="Github*"
          type="url"
          placeholder="Ej: @sally-hill"
          className="js-input-github"
        />
      </div>
    </section>
  );
}
export default Fill;
