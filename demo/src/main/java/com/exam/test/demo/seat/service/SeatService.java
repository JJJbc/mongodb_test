package com.exam.test.demo.seat.service;

import java.util.List;

import org.modelmapper.ModelMapper;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

import com.exam.test.demo.dto.SeatDto;
import com.exam.test.demo.res.ResponseDto;
import com.exam.test.demo.seat.domain.Seat;
import com.exam.test.demo.seat.repository.SeatRepository;

@Service
public class SeatService {
  private SeatRepository seatRepository;
  private final ModelMapper modelMapper;
  private static final org.slf4j.Logger logger = LoggerFactory.getLogger(SeatService.class);

  public SeatService(SeatRepository seatRepository, ModelMapper modelMapper) {
    this.seatRepository = seatRepository;
    this.modelMapper = modelMapper;
  }

  public ResponseDto<List<SeatDto>> getSeatAll(){
    List<Seat> seatList = seatRepository.findAll();

    List<SeatDto> seatDtoList = seatList.stream().map(seat -> modelMapper.map(seat, SeatDto.class)).toList();   
    

    return new ResponseDto<>(seatDtoList, "좌석 데이터 반환");
  }

  public ResponseDto<SeatDto> SeatInsert(SeatDto seatDto){
    try{
      logger.info("Received SeatDto: {}", seatDto);
        
        Seat seat = modelMapper.map(seatDto, Seat.class);
        logger.info("Mapped Seat entity: {}", seat);

        Seat savedSeat = seatRepository.save(seat);
        logger.info("Saved Seat entity: {}", savedSeat);

        SeatDto savedSeatDto = modelMapper.map(savedSeat, SeatDto.class);
        logger.info("Mapped saved SeatDto: {}", savedSeatDto);

        return new ResponseDto<>(savedSeatDto, "추가되었습니다.");
      
    } catch (Exception e) {
      logger.error("Error occurred while inserting seat", e);
        return new ResponseDto<>(null, "오류가 발생했습니다: " + e.getMessage());
    }

  }
  
}
