import React from 'react';
import pcData from '../../data/pcData.json';
import eventData from '../../data/event.json';
import ramenData from '../../data/ramen.json';
import PcButtonItem from '../../components/utils/PcButtonItem';
import EventComponent from '../../components/utils/EventComponent ';
import RamenComponent from '../../components/utils/RamenComponent';

import './HomPage.scss';

const HomePage = () => {
  const pcDataEl = pcData.map((el) => (
    <PcButtonItem key={el.id} time={el.time} price={el.price} />
  ));

  const eventEl = eventData.map((el) => (
    <EventComponent key={el.id} main={el.main} comment={el.comment} />
  ));

  const ramenEl = ramenData.map((el) => (
    <RamenComponent key={el.id} name={el.name} price={el.price} />
  ));

  return (
    <div className="home_container">
      <main className="main_container">{pcDataEl}</main>
      <article className="third_section">{ramenEl}</article>
      <article className="second_section">{eventEl}</article>
    </div>
  );
};

export default HomePage;
