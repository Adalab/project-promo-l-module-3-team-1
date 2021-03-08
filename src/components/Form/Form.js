import Fill from './Fill/Fill';
import Share from './Share/Share';
import Design from './Design/Design';
import '../../stylesheets/pages/_cards.scss';

function Form(props) {
  const handleForm = (ev) => {
    ev.preventDefault();
  };
  return (
    <form className="main-cards__sections--form" onSubmit={handleForm}>
      <Design palettes={props.palettes} handleInput={props.handleInput} />
      <Fill
        name={props.name}
        job={props.job}
        email={props.email}
        phone={props.phone}
        linkedin={props.linkedin}
        github={props.github}
        image={props.image}
        handleInput={props.handleInput}
        updateAvatar={props.updateAvatar}
      />
      <Share />
    </form>
  );
}
export default Form;
