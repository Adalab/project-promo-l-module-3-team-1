import "../../../stylesheets/form/share/_share-cards.scss";
import sendToApi from "../../../services/api.js";

function ShareButton(props) {
  const handleButton = () => {
    props.handleShare();
  };
  return (
    <div className="section__share__container hidden__content">
      <button className="button__create" onClick={handleButton}>
        <i className="fa fa-address-card-o" aria-hidden="true"></i>
        Crear tarjeta
      </button>

      <div className="section__share__create hidden"></div>
    </div>
  );
}
export default ShareButton;
