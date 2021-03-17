import "../../../stylesheets/form/design/_palette.scss";
import PropTypes from "prop-types";

function Palette(props) {
  const handlePalettes = (event) => {
    props.handleInput(event.target.name, props.value);
  };
  return (
    <div className="design__palette">
      <label className="design__label">
        <input
          className=" design__radio"
          type="radio"
          name="palette"
          value={props.value}
          checked={props.palettes === props.value}
          onChange={handlePalettes}
        />
        <ul className={`design__square palette-${props.value}`}>
          <li className="design__square--color color1">Color 1</li>
          <li className="design__square--color color2">Color 2</li>
          <li className="design__square--color color3">Color 3</li>
        </ul>
      </label>
    </div>
  );
}
Palette.propTypes = {
  palettes: PropTypes.number,
};
export default Palette;
