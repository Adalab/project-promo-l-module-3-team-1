import '../../../stylesheets/layout/_design.scss';

function Palette(props) {
  return (
    <div className="design__palette">
      <label className="design__label">
        <input
          className=" design__radio"
          type="radio"
          name="palette"
          value={props.value}
          checked={props.palette === props.value}
        />
        <ul className={props.ulClass}>
          <li className="design__square--color color1">Color 1</li>
          <li className="design__square--color color2">Color 2</li>
          <li className="design__square--color color3">Color 3</li>
        </ul>
      </label>
    </div>
  );
}
export default Palette;
