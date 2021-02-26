import Fill from "./Fill/Fill";
import Share from "./Share/Share";
import Design from "./Design/Design";

function Form(props) {
  return (
    <form className="main-cards__sections--form">
      <Design palettes={props.palettes} handleInput={props.handleInput} />
      <Fill
        name={props.name}
        job={props.job}
        email={props.email}
        phone={props.phone}
        linkedin={props.linkedin}
        github={props.github}
        handleInput={props.handleInput}
      />
      <Share />
    </form>
  );
}
export default Form;
