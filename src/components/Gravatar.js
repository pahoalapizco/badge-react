import React from 'react';
import md5 from 'md5';

const Gravar = ({ email, className }) => {
  const hash = md5(email);

  return (
    <img 
      src={`https://www.gravatar.com/avatar/${hash}?d=identicon`} 
      alt="Avatar" 
      className={className}
    />
  )
}

export default Gravar;
