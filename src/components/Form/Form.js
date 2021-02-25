import Fill from "./Fill/Fill";
import Share from "./Share/Share";
import Design from "./Design/Design";
import Collapsable from "./Collapsable";

function Form(props) {
  return (
    <form className="main-cards__sections--form">
      <Design />
      <Fill
        name={props.name}
        job={props.job}
        linkedin={props.linkedin}
        github={props.github}
        handleInput={props.handleInput}
      />
      <Share />
    </form>
  );
}
export default Form;
