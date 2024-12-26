import React from 'react';
import style from './Ramen.module.scss';

function RamenComponent({ name, price }) {
  return (
    <div className={`${style.Ramen_container}`}>
      <div className={`${style.Ramen_IMG}`}></div>
      <div className={`${style.Ramen_content}`}>
        <span className={`${style.Ramen_name}`}>{name}</span>
        <span className={`${style.Ramen_price}`}>{price}원</span>
      </div>
    </div>
  );
}

export default RamenComponent;
