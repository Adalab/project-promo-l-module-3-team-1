import "../../stylesheets/App.scss";

function ResetButton() {
  return (
    <div className="photo-container">
      <div className="photo-button ">
        <button className="photo-button__link js-reset">Reset</button>
        <i className="fa fa-trash" aria-hidden="true"></i>
      </div>
    </div>
  );
}
export default ResetButton;
