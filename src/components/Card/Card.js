import '../../stylesheets/App.scss';
import ResetButton from './ResetButton';
import PreviewCard from './PreviewCard';

function Card(props) {
  return (
    <section className="photo">
      <ResetButton />
      <PreviewCard
        name={props.name}
        job={props.job}
        palettes={props.palettes}
      />
    </section>
  );
}
export default Card;
