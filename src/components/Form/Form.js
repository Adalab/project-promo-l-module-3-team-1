import CollapsHeader from './CollapsHeader';
import Fill from './Fill';
import Share from './Share';

function Form() {
  return (
    <form className="main-cards__sections--form">
      <section className=" js-collapsable-container">
        <CollapsHeader icon="fa-object-ungroup" title="Diseña" />
        <div className="design hidden__container collapsable--close">
          <h3 className="design__title">Colores</h3>
          <div>
            <div className="design__palette">
              <label className="design__label">
                <input
                  className=" design__radio js-palette js-paletteDefault"
                  type="radio"
                  name="palette"
                  value="1"
                  checked
                />
                <ul className="design__square palette-1">
                  <li className="design__square--color color1">Color 1</li>
                  <li className="design__square--color color2">Color 2</li>
                  <li className="design__square--color color3">Color 3</li>
                </ul>
              </label>
            </div>
            <div className="design__palette">
              <label className="design__label">
                <input
                  className=" design__radio js-palette"
                  type="radio"
                  name="palette"
                  value="2"
                />
                <ul className="design__square palette-2">
                  <li className="design__square--color color1">Color 1</li>
                  <li className="design__square--color color2">Color 2</li>
                  <li className="design__square--color color3">Color 3</li>
                </ul>
              </label>
            </div>
            <div className="design__palette">
              <label className="design__label">
                <input
                  className=" design__radio js-palette"
                  type="radio"
                  name="palette"
                  value="3"
                />
                <ul className="design__square  palette-3">
                  <li className="design__square--color color1">Color 1</li>
                  <li className="design__square--color color2">Color 2</li>
                  <li className="design__square--color color3">Color 3</li>
                </ul>
              </label>
            </div>
            <div className="design__palette">
              <label className="design__label">
                <input
                  className=" design__radio js-palette"
                  type="radio"
                  name="palette"
                  value="4"
                />
                <ul className="design__square palette-4">
                  <li className="design__square--color color1">Color 1</li>
                  <li className="design__square--color color2">Color 2</li>
                  <li className="design__square--color color3">Color 3</li>
                </ul>
              </label>
            </div>
          </div>
        </div>
      </section>
      <Fill />
      <Share />
    </form>
  );
}
export default Form;
