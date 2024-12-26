import React, { useEffect, useState } from 'react';
import Api from '../../axios/api';
import SeatItem from '../../components/seat/SeatItem';
import SeatForm from './SeatInsert';
import { Link } from 'react-router-dom';

function SeatPage() {
  const [seatList, setSeatList] = useState([]); // 데이터를 사용하기 위한 getter, setter
  const [showForm, setShowForm] = useState(false); //

  // 가장 먼저 해야하는 것
  const fetchSeatList = async () => {
    try {
      const res = await Api.get('/api/seats/');
      console.log(res.data); // ResponseDto
      setSeatList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchSeatList();
  }, []);

  const handleShowForm = () => {
    setShowForm(true); // 버튼 클릭 시 폼 표시
  };

  const setaListEls = seatList.map((seat) =>
    (<SeatItem key={seat.id} seat={seat} />)(
      <div key={seat.Id}>
        <div>{seat.number}</div>
        <div>{seat.cost}</div>
      </div>
    )
  );

  return (
    <div>
      <Link to="/seat-insert">추가</Link>
    </div>
  );
}

export default SeatPage;
