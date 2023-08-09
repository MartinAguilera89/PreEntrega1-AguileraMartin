import React from 'react';
import { useState } from 'react';


const ItemCount = () => {
  const [contador, setContador] = useState(0);

  const sumar = () => {
    setContador(contador + 1);
  };

  const restar = () => {
    if (contador > 0) {
      setContador(contador - 1);
    }
  };

 

  return (
    <div className="item-count-card">
      <button className="item-count-button" onClick={restar}>
        -
      </button>
      <div className="item-count-number">{contador}</div>
      <button className="item-count-button" onClick={sumar}>
        +
      </button>
    </div>
  );
};

export default ItemCount;