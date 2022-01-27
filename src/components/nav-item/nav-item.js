import React from "react";

import navItemStyles from './nav-item.module.css';
import PropTypes from 'prop-types';

function NavItem({ children, text, isActive }) {
  return (
    <div className={`${navItemStyles.link} ${isActive && navItemStyles.link_type_current} pl-5 pt-4 pr-5 pb-4`}>
      {children}
      <p className={`text text_type_main-default } ml-2`}>{text}</p>
    </div>
  );
}

NavItem.propTypes = {
  children: PropTypes.element.isRequired,
  text: PropTypes.string.isRequired,
  isActive: PropTypes.bool.isRequired,
};

export default NavItem;