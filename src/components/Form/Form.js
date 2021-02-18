import CollapsHeader from './CollapsHeader';

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
      <section className="fill js-collapsable-container collapsable--close">
        <CollapsHeader icon="fa-keyboard-o" title="Rellena" />

        <div className="hidden__container fill__form">
          <label className="fill__form--labels" htmlFor="fullName">
            Nombre completo*
          </label>
          <input
            id="fullName"
            type="text"
            name="fullName"
            placeholder="Ej: Sally Jill"
            className="fill__form--inputs js-name js-input-name js-input-text"
          />
          <label className="fill__form--labels" htmlFor="position">
            Puesto*
          </label>
          <input
            id="position"
            type="text"
            name="position"
            placeholder="Ej: Front-end unicorn"
            className="fill__form--inputs js-position js-input-job js-input-text"
          />
          <div className="fill__form--image-profile">
            <span className="fill__form--labels">Imagen de perfil*</span>

            <div className="button-box-container">
              <label
                className="fill__form--button js__profile-trigger"
                htmlFor="add"
              >
                Añadir imagen
              </label>
              <input
                type="file"
                name=""
                id="add"
                className="js__profile-upload-btn"
              />
              <span className="fill__form--box js__profile-preview"></span>
            </div>
          </div>
          <label className="fill__form--labels" htmlFor="">
            Email*
          </label>
          <input
            id="emailAddress"
            type="email"
            name="emailAddress"
            placeholder="Ej: sally-hill@gmail.com"
            className="fill__form--inputs js-input-email js-input-text"
            value=" "
          />
          <label className="fill__form--labels" htmlFor="telephone">
            Teléfono*
          </label>
          <input
            id="telephone"
            type="tel"
            name="telephone"
            placeholder="Ej: 555-55-55-55"
            className="fill__form--inputs js-input-phone js-input-text"
          />

          <label className="fill__form--labels" htmlFor="linkedin">
            Linkedin*
          </label>
          <input
            id="linkedin"
            type="url"
            name="linkedin"
            placeholder="Ej: linkedin.com/in/sally.hill"
            className="fill__form--inputs js-input-linkedin js-input-text"
          />

          <label className="fill__form--labels" htmlFor="github">
            Github*
          </label>
          <input
            id="github"
            type="url"
            name="github"
            placeholder="Ej: @sally-hill"
            className="fill__form--inputs js-input-github js-input-text "
          />
        </div>
      </section>
      <section className="sharecards js-collapsable-container collapsable--close">
        <CollapsHeader icon="fa-share-alt" title="Comparte" />

        {/*Share open*/}

        <div className="section__share__container hidden__container">
          <button className="button__create js-create-btn js-collapsable-container js-hidden">
            <i className="fa fa-address-card-o" aria-hidden="true"></i>
            Crear tarjeta
          </button>

          <div className="section__share__create js-card-result js-hidden-collapsable hidden"></div>
        </div>
      </section>
    </form>
  );
}
export default Form;
