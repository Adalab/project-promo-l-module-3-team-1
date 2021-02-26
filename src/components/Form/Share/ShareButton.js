import '../../../stylesheets/layout/_share-cards.scss';

function ShareButton() {
  return (
    <div className="section__share__container hidden__content">
      <button className="button__create">
        <i className="fa fa-address-card-o" aria-hidden="true"></i>
        Crear tarjeta
      </button>

      <div className="section__share__create hidden"></div>
    </div>
  );
}
export default ShareButton;
