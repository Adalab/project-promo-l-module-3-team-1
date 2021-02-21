import CollapsHeader from '../CollapsHeader';
import Palettes from './Palettes';

function Design() {
  return (
    <section className=" js-collapsable-container">
      <CollapsHeader icon="fa-object-ungroup" title="Diseña" />
      <Palettes />
    </section>
  );
}
export default Design;
