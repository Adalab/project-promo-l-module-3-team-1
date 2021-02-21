import Fill from "./Fill/Fill";
import Share from "./Share/Share";
import Design from "./Design/Design";

function Form() {
  return (
    <form className="main-cards__sections--form">
      <Design />
      <Fill />
      <Share />
    </form>
  );
}
export default Form;
