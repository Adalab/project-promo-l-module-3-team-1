import '../../stylesheets/layout/_collapsable.scss';

function CollapsHeader(props) {
  return (
    <div className="section-title js-collapsable-header">
      <div className="title-icon">
        <span className={'article__list--icon fas fa ' + props.icon}></span>
        <span className="title">{props.title}</span>
      </div>
      <i className="fa fa-leaf" aria-hidden="true"></i>
    </div>
  );
}
export default CollapsHeader;
