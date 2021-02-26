import Collapsable from '../Collapsable';
import Palettes from './Palettes';

function Design(props) {
  // esto lo recibiremos de una prop

  return (
    <Collapsable icon="fa-object-ungroup" title="Diseña">
      <Palettes palettes={props.palettes} handleInput={props.handleInput} />
    </Collapsable>
  );
}
export default Design;
