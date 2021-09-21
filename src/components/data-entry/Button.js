import React from 'react';

const Button = ({children, ...rest}) => {
  return(<button style={{ padding: "4px 16px", background:"beige"}} {...rest}>{children}</button>);
}
 
export default Button;