import PropTypes from "prop-types";

function Input(props) {
  const handleInputEvent = (event) => {
    props.handleInput(event.target.name, event.target.value);
  };
  return (
    <>
      <label className="fill__form--labels" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        onChange={handleInputEvent}
        className={`fill__form--inputs ${props.className}`}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        value={props.value}
        required
      />
    </>
  );
}
Input.defaultProps = { type: "text" };
Input.propTypes = {
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
};

export default Input;
