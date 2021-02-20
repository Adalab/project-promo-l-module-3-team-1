import "../stylesheets/App.scss";
// import "../stylesheets/core/_reset.scss";
// import "../stylesheets/core/_variables.scss";
// import "../stylesheets/layout/_main-cards.scss";
// import "../stylesheets/layout/_photocard.scss";

function Card() {
  return (
    <section className="photo">
      <div className="photo-container">
        <div className="photo-button ">
          <button className="photo-button__link js-reset">Reset</button>
          <i className="fa fa-trash" aria-hidden="true"></i>
        </div>

        <article className="photocard js-card palette-1">
          <div className="container">
            <div className="tittlescontainer">
              <h2 className=" photocard__title js-preview-name js-card-name js-input-text">
                Nombre apellido
              </h2>
              <p className=" photocard__title2 js-preview-position js-card-job js-input-text">
                Front-end developer
              </p>
            </div>
          </div>
          <div className="photocard__img js__profile-image"></div>
          <ul className="photocard__list">
            <li className="photocard__list--item">
              <a
                href=""
                className=" photocard__list--link icon fa fa-mobile js-card-phone  js-input-text"
              ></a>
            </li>

            <li className="photocard__list--item">
              <a
                href=""
                className=" photocard__list--link icon fa fa-envelope js-card-email  js-input-text"
              ></a>
            </li>

            <li className="photocard__list--item">
              <a
                href=""
                className=" photocard__list--link js-card-linkedin icon fa fa-linkedin  js-input-text"
              ></a>
            </li>
            <li className="photocard__list--item">
              <a
                href=""
                className=" photocard__list--link js-card-github icon fa fa-github-alt  js-input-text"
              ></a>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
}
export default Card;
