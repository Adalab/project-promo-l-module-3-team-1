import Collapsable from "../Collapsable";
import ImageProfile from "./ImageProfile";
import Input from "./Inputs";

function Fill() {
  return (
    <section className="fill">
      <Collapsable icon="fa-keyboard-o" title="Rellena">
        <div className="hidden__content fill__form">
          <Input
            name="fullName"
            label="Nombre completo*"
            placeholder="Ej: Sally Jill"
            classname=""
          />
          <Input
            name="position"
            label="Puesto*"
            placeholder="Ej: Front-end unicorn"
            className=""
          />

          <Input
            name="emailAddress"
            label="Email*"
            type="email"
            placeholder="Ej: sally-hill@gmail.com"
            className=""
            value=" "
          />

          <ImageProfile />

          <Input
            name="telephone"
            label="Teléfono*"
            type="tel"
            placeholder="Ej: 555-55-55-55"
            className=""
          />

          <Input
            name="linkedin"
            label="Linkedin*"
            type="url"
            placeholder="Ej: linkedin.com/in/sally.hill"
            className=""
          />

          <Input
            name="github"
            label="Github*"
            type="url"
            placeholder="Ej: @sally-hill"
            className=""
          />
        </div>
      </Collapsable>
    </section>
  );
}
export default Fill;
