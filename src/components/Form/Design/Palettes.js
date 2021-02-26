import '../../../stylesheets/layout/_design.scss';
import Palette from './Palette';

function Palettes(props) {
  return (
    <div className="design hidden__content">
      <h3 className="design__title">Colores</h3>
      <div>
        <Palette
          value={1}
          ulClass="design__square palette-1"
          palette={props.palette}
        />
        <Palette
          value={2}
          ulClass="design__square palette-2"
          palette={props.palette}
        />
        <Palette
          value={3}
          ulClass="design__square palette-3"
          palette={props.palette}
        />
        <Palette
          value={4}
          ulClass="design__square palette-4"
          palette={props.palette}
        />
      </div>
    </div>
  );
}
export default Palettes;
