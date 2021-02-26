import '../../../stylesheets/layout/_design.scss';

function Palette(props) {
  const handlePalettes = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <div className="design__palette">
      <label className="design__label">
        <input
          className=" design__radio"
          type="radio"
          name={props.palettes}
          value={props.value}
          handleInput={props.handleInput}
          onChange={handlePalettes}
        />
        <ul className={props.ulClass}>
          <li className="design__square--color color1">Color 1</li>
          <li className="design__square--color color2">Color 2</li>
          <li className="design__square--color color3">Color 3</li>
        </ul>
      </label>
    </div>
  );
}
export default Palette;
