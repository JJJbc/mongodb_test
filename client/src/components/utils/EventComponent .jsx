import React from 'react';
import style from './Event.module.scss';

const Event = ({ main, comment }) => {
  return (
    <div className={`${style.event_container}`}>
      <span className={`${style.event_container_main}`}>{main}</span>
      <span className={`${style.event_container_container}`}>{comment}</span>
    </div>
  );
};

export default Event;
