import React from 'react';

const SeatItem = ({ seat }) => {
  return (
    <div>
      <div>{seat.number}</div>
      <div>{seat.cost}</div>
    </div>
  );
};

export default SeatItem;
