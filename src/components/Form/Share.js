import CollapsHeader from "./CollapsHeader";
import ShareButton from "./ShareButton";

function Share() {
  return (
    <section className="sharecards js-collapsable-container collapsable--close">
      <CollapsHeader icon="fa-share-alt" title="Comparte" />
      <ShareButton />
    </section>
  );
}
export default Share;
