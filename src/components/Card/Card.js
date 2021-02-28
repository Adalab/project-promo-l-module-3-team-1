import "../../stylesheets/App.scss";
import ResetButton from "./ResetButton";
import PreviewCard from "./PreviewCard";

function Card(props) {
  const handleReset = () => {
    props.getbuttonReset();
  };
  return (
    <section className="photo">
      <ResetButton getReset={handleReset} />
      <PreviewCard
        name={props.name}
        job={props.job}
        email={props.email}
        phone={props.phone}
      />
    </section>
  );
}
export default Card;
