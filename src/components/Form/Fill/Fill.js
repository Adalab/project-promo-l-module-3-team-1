import Collapsable from "../Collapsable";
import ImageProfile from "./ImageProfile";
import Input from "./Inputs";

function Fill(props) {
  return (
    <section className="fill">
      <Collapsable icon="fa-keyboard-o" title="Rellena">
        <div className="hidden__content fill__form">
          <Input
            name="name"
            label="Nombre completo*"
            placeholder="Ej: Sally Jill"
            classname=""
            value={props.name}
            handleInput={props.handleInput}
          />
          <Input
            name="job"
            label="Puesto*"
            placeholder="Ej: Front-end unicorn"
            className=""
            value={props.job}
            handleInput={props.handleInput}
          />

          <Input
            name="email"
            label="Email*"
            type="email"
            placeholder="Ej: sally-hill@gmail.com"
            className=""
            value={props.email}
            handleInput={props.handleInput}
          />

          <ImageProfile />

          <Input
            name="phone"
            label="Teléfono*"
            type="tel"
            placeholder="Ej: 555-55-55-55"
            className=""
            value={props.phone}
            handleInput={props.handleInput}
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
