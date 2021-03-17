import Collapsable from "../Collapsable";
import Palettes from "./Palettes";
import "../../../stylesheets/form/design/_design.scss";
import PropTypes from "prop-types";

function Design(props) {
  return (
    <Collapsable icon="fa-object-ungroup" title="Diseña" open>
      <Palettes palettes={props.palettes} handleInput={props.handleInput} />
    </Collapsable>
  );
}
Design.propTypes = {
  palettes: PropTypes.number,
};
export default Design;
