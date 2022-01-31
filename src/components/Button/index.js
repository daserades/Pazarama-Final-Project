import React from 'react';
import './index.css';
import PropTypes from 'prop-types';

function Button(props) {
  const { buttonName, onClick, className, type } = props;
  return (
    <div className="button">
      <button onClick={onClick} className={className} type={type}>
        {buttonName}
      </button>
    </div>
  );
}

Button.propTypes = {
  buttonName: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  type: PropTypes.string
};

export default Button;
