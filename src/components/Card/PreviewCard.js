import '../../stylesheets/App.scss';
import previewPhoto from '../../images/photo-preview2.jpg';

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

/* DEFAULT.PROPS de nombre, job y foto hasta ver eventos */
/* PreviewCard.defaultProps = {
  name: 'Nombre Apellido',
  job: 'Front-end developer',
  photo: previewPhoto,
}; */

export default PreviewCard;
