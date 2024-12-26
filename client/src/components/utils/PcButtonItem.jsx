import React from 'react';
import style from './PcButtonItem.module.scss';

const PcButtonItem = ({ time, price }) => {
  // time 가공
  const formatTime = (time) => {
    const hours = Math.floor(time / 60);
    const minutes = time % 60;
    return `${hours > 0 ? hours + '시간' : ''}${minutes}분`;
  };
  // price 가공
  const formatPrice = (price) => {
    return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',') + '원';
  };

  return (
    <div className={`${style.pc_item_container}`}>
      <span className={`${style.pc_item_time}`}>시간: {formatTime(time)}</span>
      <button className={`${style.pc_item_price}`}>{formatPrice(price)}</button>
    </div>
  );
};

export default PcButtonItem;
