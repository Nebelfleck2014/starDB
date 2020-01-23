import React from 'react';
import './error-indicator.css';
import icon from './error.png';

const ErrorIndicator = () => {
  return (
    <div className='error-indicator'>
      <img src={icon} alt="error icon"/>
      <span className='Oops'>Ooops, something has gone terrible wrong!</span>
    </div>
  )
}

export default ErrorIndicator;
