import React from 'react';

import './style/PageError.css';

const PageError = ({ error }) => {
  return (
    <div className="PageError">
       Error: {error}
    </div>
  )
}

export default PageError;
