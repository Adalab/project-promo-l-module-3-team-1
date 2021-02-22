import "../../stylesheets/App.scss";

function PreviewCard() {
  return (
    <article className="photocard palette-1">
      <div className="container">
        <div className="tittlescontainer">
          <h2 className=" photocard__title">Nombre apellido</h2>
          <p className=" photocard__title2">Front-end developer</p>
        </div>
      </div>
      <div className="photocard__img"></div>
      <ul className="photocard__list">
        <li className="photocard__list--item">
          <a href="" className=" photocard__list--link icon fa fa-mobile"></a>
        </li>

        <li className="photocard__list--item">
          <a href="" className=" photocard__list--link icon fa fa-envelope"></a>
        </li>

        <li className="photocard__list--item">
          <a href="" className=" photocard__list--link icon fa fa-linkedin"></a>
        </li>
        <li className="photocard__list--item">
          <a
            href=""
            className=" photocard__list--link  icon fa fa-github-alt  "
          ></a>
        </li>
      </ul>
    </article>
  );
}
export default PreviewCard;
