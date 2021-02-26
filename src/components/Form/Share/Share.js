import Collapsable from '../Collapsable';
import ShareButton from './ShareButton';

function Share() {
  return (
    <section>
      <Collapsable icon="fa-share-alt" title="Comparte">
        <ShareButton />
      </Collapsable>
    </section>
  );
}
export default Share;
