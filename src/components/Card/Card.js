import "../../stylesheets/App.scss";
import ResetButton from "./ResetButton";
import PreviewCard from "./PreviewCard";

function Card() {
  return (
    <section className="photo">
      <ResetButton />
      <PreviewCard />
    </section>
  );
}
export default Card;
