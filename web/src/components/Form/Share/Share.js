import Collapsable from "../Collapsable";
import ShareButton from "./ShareButton";
import PropTypes from "prop-types";

function Share(props) {
  return (
    <section>
      <Collapsable icon="fa-share-alt" title="Comparte">
        <ShareButton
          handleShare={props.handleShare}
          serverData={props.serverData}
          hiddenClass={props.hiddenClass}
        />
      </Collapsable>
    </section>
  );
}
Share.propTypes = {
  handleShare: PropTypes.func,
};
export default Share;
