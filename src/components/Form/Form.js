import Fill from './Fill/Fill';
import Share from './Share/Share';
import Design from './Design/Design';

function Form(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleForm} className="main-cards__sections--form">
      <Design />
      <Fill name={props.name} job={props.job} handleInput={props.handleInput} />
      <Share />
    </form>
  );
}
export default Form;
