import "../../stylesheets/App.scss";

function ResetButton(props) {
  const handleReset = () => {
    props.getReset();
  };
  return (
    <div className="photo-container">
      <div className="photo-button ">
        <button onClick={handleReset} className="photo-button__link">
          Reset
        </button>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
    </div>
  );
}
export default ResetButton;
