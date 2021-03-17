import "../../stylesheets/card/_card.scss";
import ResetButton from "./ResetButton";
import PreviewCard from "./PreviewCard";
import PropTypes from "prop-types";

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
          image={props.image}
          uploadImage={props.uploadImage}
        />
      </div>
    </section>
  );
}
Card.propTypes = {
  name: PropTypes.string,
  job: PropTypes.string,
  palettes: PropTypes.number,
  email: PropTypes.string,
  phone: PropTypes.string,
  linkedin: PropTypes.string,
  github: PropTypes.string,
  image: PropTypes.string,
};

export default Card;
