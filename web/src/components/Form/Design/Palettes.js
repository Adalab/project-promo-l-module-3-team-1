import "../../../stylesheets/form/design/_palettes.scss";
import Palette from "./Palette";
import PropTypes from "prop-types";
function Palettes(props) {
  return (
    <div className="design hidden__content">
      <h3 className="design__title">Colores</h3>
      <div>
        <Palette
          value={1}
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
        <Palette
          value={2}
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
        <Palette
          value={3}
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
        <Palette
          value={4}
          palettes={props.palettes}
          handleInput={props.handleInput}
        />
      </div>
    </div>
  );
}
Palettes.propTypes = {
  palettes: PropTypes.number,
};
export default Palettes;
