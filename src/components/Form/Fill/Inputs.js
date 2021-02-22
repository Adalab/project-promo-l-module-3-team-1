function Input(props) {
  return (
    <>
      <label className="fill__form--labels" htmlFor={props.name}>
        {props.label}
      </label>
      <input
        className={`fill__form--inputs ${props.className}`}
        type={props.type}
        name={props.name}
        id={props.name}
        placeholder={props.placeholder}
        required
        /*   {props.children} */
      />
    </>
  );
}
Input.defaultProps = { type: "text" };
export default Input;
