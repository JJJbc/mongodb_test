import React, { useContext, useState } from 'react';
import Api from '../../axios/api';
import { useUser } from '../../context/UserContext';

function SeatForm() {
  const [newSeat, setNewSeat] = useState({ number: 0, cost: 0 });
  const { user } = useUser();
  console.log(user);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewSeat((prevSeat) => ({
      ...prevSeat,
      [name]: name === 'id' ? value : parseInt(value, 10),
    }));
  };

  const fetchSeatAdd = async () => {
    try {
      const response = await Api.post('/api/seats/insert', newSeat);
      console.log(response.data);
      setNewSeat({ number: 0, cost: 0 });
    } catch (error) {
      console.log('오류가 발생했습니다.' + error.response.data);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchSeatAdd();
  };

  return (
    <div>
      <h2>새 좌석 추가</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="number">좌석 번호:</label>
          <input
            type="number"
            id="number"
            name="number"
            value={newSeat.number}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="cost">좌석 가격:</label>
          <input
            type="number"
            id="cost"
            name="cost"
            value={newSeat.cost}
            onChange={handleChange}
          />
        </div>
        <button type="submit">좌석 추가</button>
      </form>
    </div>
  );
}

export default SeatForm;
