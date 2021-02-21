import '../../../stylesheets/layout/_design.scss';
import Palette from './Palette';

function Palettes(props) {
  return (
    <div className="design hidden__container collapsable--close">
      <h3 className="design__title">Colores</h3>
      <div>
        <Palette
          value="1"
          ulClass="design__square palette-1" /* checked={true} */
        />
        <Palette value="2" ulClass="design__square palette-2" />
        <Palette value="3" ulClass="design__square palette-3" />
        <Palette value="4" ulClass="design__square palette-4" />
      </div>
    </div>
  );
}
export default Palettes;
