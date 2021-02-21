import CollapsHeader from "../CollapsHeader";
import ImageProfile from "./ImageProfile";
import Input from "./Inputs";

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

        <Input
          name="emailAddress"
          label="Email*"
          type="email"
          placeholder="Ej: sally-hill@gmail.com"
          className="js-input-email"
          value=" "
        />

        <ImageProfile />

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
