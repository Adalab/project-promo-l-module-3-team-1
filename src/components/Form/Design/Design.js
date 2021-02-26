import Collapsable from '../Collapsable';
import Palettes from './Palettes';
import '../../../stylesheets/layout/_design.scss';

function Design(props) {
  // esto lo recibiremos de una prop

  return (
    <Collapsable icon="fa-object-ungroup" title="Diseña" open>
      {/* if there is no value, its true ={true}*/}
      <Palettes palettes={props.palettes} handleInput={props.handleInput} />
    </Collapsable>
  );
}
export default Design;
