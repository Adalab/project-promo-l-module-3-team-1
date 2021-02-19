import "../../stylesheets/layout/_share-cards.scss";

function ShareButton() {
  return (
    <div className="section__share__container hidden__container">
      <button className="button__create js-create-btn js-collapsable-container js-hidden">
        <i className="fa fa-address-card-o" aria-hidden="true"></i>
        Crear tarjeta
      </button>

      <div className="section__share__create js-card-result js-hidden-collapsable hidden"></div>
    </div>
  );
}
export default ShareButton;
