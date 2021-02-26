import React, { useState } from 'react';

import '../../stylesheets/layout/_collapsable.scss';

function Collapsable(props) {
  const [isOpen, setIsOpen] = useState(
    !!props.open
  ); /* double negation transforms from undefined(falsy) to false */

  const handleClick = (ev) => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="">
      {/* header */}
      <div className="section-title" onClick={handleClick}>
        <div className="title-icon">
          <span className={'article__list--icon fas fa ' + props.icon}></span>
          <span className="title">{props.title}</span>
        </div>
        <i className="fa fa-leaf" aria-hidden="true"></i>
      </div>
      {/* content */}
      <div
        className={`hidden__content ${
          isOpen === true ? '' : 'collapsable--close'
        }`}
        /*    ${isOpen === false ? "" : "collapsable--close"}`} */
      >
        {props.children}
      </div>
    </section>
  );
}

export default Collapsable;
