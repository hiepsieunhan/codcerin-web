import React, { PropTypes } from 'react';

const SolidButton = ({onClick, text = "", theme = 'primary'}) => {
  const handleButtonClicked = () => {
    if (onClick) {
      onClick();
    }
  }
  return (
    <div className={`codcerin-button codcerin-button__solid codcerin-button__solid--${theme}`}
      onClick={handleButtonClicked}>
      {text}
    </div>
  );
}
SolidButton.propTYpes = {
  onClick: PropTypes.func,
  text: PropTypes.string,
  theme: PropTypes.string
}

export {
  SolidButton
}
