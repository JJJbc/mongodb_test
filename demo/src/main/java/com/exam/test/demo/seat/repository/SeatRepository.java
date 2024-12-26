package com.exam.test.demo.seat.repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import com.exam.test.demo.seat.domain.Seat;

@Repository
public interface SeatRepository extends MongoRepository<Seat, String>{

  /* 
   * 1. 목록 가져오기
   * 2. 좌석 추가하기
   */

   List<Seat> findAll();
} 