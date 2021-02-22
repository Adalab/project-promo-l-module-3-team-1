import Collapsable from "../Collapsable";
import Palettes from "./Palettes";

function Design() {
  // esto lo recibiremos de una prop
  const palette = 1;
  return (
    <Collapsable icon="fa-object-ungroup" title="Diseña">
      <Palettes palette={palette} />
    </Collapsable>
  );
}
export default Design;
