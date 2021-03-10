import '../../stylesheets/card/_card.scss';
import ResetButton from './ResetButton';
import PreviewCard from './PreviewCard';

function Card(props) {
  return (
    <section className="photo">
      <div className="photo-container">
        <ResetButton getReset={props.getToApp} />
        <PreviewCard
          name={props.name}
          job={props.job}
          palettes={props.palettes}
          email={props.email}
          phone={props.phone}
          linkedin={props.linkedin}
          github={props.github}
          photo={props.photo}
        />
      </div>
    </section>
  );
}
export default Card;
