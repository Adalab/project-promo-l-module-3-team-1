import '../../stylesheets/layout/_resetButton.scss';

function ResetButton(props) {
  const handleReset = () => {
    props.getReset();
  };
  return (
    <div className="photo-button ">
      <button onClick={handleReset} className="photo-button__link">
        Reset
      </button>
      <i className="fa fa-trash" aria-hidden="true"></i>
    </div>
  );
}
export default ResetButton;
