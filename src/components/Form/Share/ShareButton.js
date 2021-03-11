import '../../../stylesheets/form/share/_share-cards.scss';

function ShareButton(props) {
  const shareLink = props.serverData.cardURL;
  console.log(shareLink);

  const renderCreatedCard = () => {
    if (props.serverData.success === true) {
      return (
        <>
          <h3 className="section__share_copy">La tarjeta ha sido creada:</h3>
          <p>
            <a
              href={shareLink}
              className="text_link_card section__twitter__button"
              target="_blank"
            >
              {shareLink}
            </a>
          </p>
          <a className="share" target="_blank">
            <i className="fa fa-twitter" aria-hidden="true"></i> Compartir en
            Twitter
          </a>
        </>
      );
      /*   createBtn.disabled = true;
      const twitterLink = document.querySelector('.js-btn-twitter');
      twitterLink.setAttribute(
        'href',
        `https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&url=${shareLink}`
      ); */
    } else {
      return (
        <>
          <h4 className="title1">La tarjeta no puede ser creada aún</h4>
          <h4 className="title1">
            Por favor, completa todos los campos marcados con *
          </h4>
        </>
      );
    }
  };
  const handleButton = () => {
    props.handleShare();
  };
  return (
    <div className="section__share__container hidden__content">
      <button className="button__create" onClick={handleButton}>
        <i className="fa fa-address-card-o" aria-hidden="true"></i>
        Crear tarjeta
      </button>

      {/* PENDIENTE añadir o quitar clase hidden */}
      <div className="section__share__create ">{renderCreatedCard()}</div>
    </div>
  );
}
export default ShareButton;
