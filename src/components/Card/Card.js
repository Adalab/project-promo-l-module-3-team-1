import '../../stylesheets/App.scss';
import ResetButton from './ResetButton';
import PreviewCard from './PreviewCard';

function Card(props) {
  const handleReset = () => {
    props.getBtnReset();
  };
  return (
    <section className="photo">
      <ResetButton getReset={handleReset} />
      <PreviewCard
        name={props.name}
        job={props.job}
        palettes={props.palettes}
        email={props.email}
        phone={props.phone}
        linkedin={props.linkedin}
        github={props.github}
      />
    </section>
  );
}
export default Card;
