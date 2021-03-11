import Collapsable from "../Collapsable";
import ShareButton from "./ShareButton";

function Share(props) {
  return (
    <section>
      <Collapsable icon="fa-share-alt" title="Comparte">
        <ShareButton
          handleShare={props.handleShare}
          serverData={props.serverData}
        />
      </Collapsable>
    </section>
  );
}
export default Share;
