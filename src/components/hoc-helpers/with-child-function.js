import React from 'react';

const withChildFunction = (fn) => (Wrapped) => {  //1) оборачиваемый компонент 2)props children
  return (props) => {
    return (
      <Wrapped {...props}>
        {fn}
      </Wrapped>
    );
  }
}

export default withChildFunction;
