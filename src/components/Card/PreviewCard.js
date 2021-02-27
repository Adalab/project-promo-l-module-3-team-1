import '../../stylesheets/card/_previewCard.scss';
import previewPhoto from '../../images/photo-preview2.jpg';

function PreviewCard(props) {
  return (
    <article className={`photocard palette-${props.palettes}`}>
      <div className="container">
        <div className="tittlescontainer">
          <h2 className=" photocard__title">
            {props.name || 'Nombre y Apellido'}
          </h2>
          <p className=" photocard__title2">
            {props.job || 'Front-end developer'}
          </p>
        </div>
      </div>
      <div className="photocard__img"></div>
      <ul className="photocard__list">
        <li className="photocard__list--item">
          <a
            href={props.phone ? `tel:${props.phone}` : '#'}
            className=" photocard__list--link icon fa fa-mobile"
          ></a>
        </li>

        <li className="photocard__list--item">
          <a
            href={props.email ? `mailto:${props.email}` : '#'}
            className=" photocard__list--link icon fa fa-envelope"
          ></a>
        </li>

        <li className="photocard__list--item">
          <a
            href={
              props.linkedin
                ? `https://www.linkedin.com/in/${props.linkedin}`
                : '#'
            }
            target="_blank"
            className=" photocard__list--link icon fa fa-linkedin"
          ></a>
        </li>
        <li className="photocard__list--item">
          <a
            href={props.github ? `https://www.github.com/${props.github}` : '#'}
            target="_blank"
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
