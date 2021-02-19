import "../../stylesheets/App.scss";
import ResetButton from "./ResetButton";

function Card() {
  return (
    <section className="photo">
      <ResetButton />

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
    </section>
  );
}
export default Card;
