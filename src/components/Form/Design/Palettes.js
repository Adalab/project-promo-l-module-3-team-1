import '../../../stylesheets/layout/_design.scss';
import Palette from './Palette';

function Palettes(props) {
  console.log(props.palettes);

  return (
    <div className="design hidden__content">
      <h3 className="design__title">Colores</h3>
      <div>
        <Palette
          value={1}
          ulClass="design__square palette-1"
          palettes={props.palettes}
          handleInput={props.handleInput}
          checked={props.palettes === props.value}
        />
        <Palette
          value={2}
          ulClass="design__square palette-2"
          palettes={props.palettes}
          handleInput={props.handleInput}
          checked={props.palettes === props.value}
        />
        <Palette
          value={3}
          ulClass="design__square palette-3"
          palettes={props.palettes}
          handleInput={props.handleInput}
          checked={props.palettes === props.value}
        />
        <Palette
          value={4}
          ulClass="design__square palette-4"
          palettes={props.palettes}
          handleInput={props.handleInput}
          checked={props.palettes === props.value}
        />
      </div>
    </div>
  );
}
export default Palettes;
