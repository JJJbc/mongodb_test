package com.exam.test.demo.seat.controller;

import java.util.List;

import org.slf4j.LoggerFactory;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.exam.test.demo.dto.SeatDto;
import com.exam.test.demo.res.ResponseDto;
import com.exam.test.demo.seat.service.SeatService;



@RestController
@RequestMapping("/api/seats") // * -> 여기만 복수형태로 작성함
public class SeatController {
  private SeatService seatService;
  private static final org.slf4j.Logger logger = LoggerFactory.getLogger(SeatController.class);
  
  public SeatController(SeatService seatService){
    this.seatService = seatService;
  }

  @GetMapping("/")
  public ResponseEntity<ResponseDto<?>> getMethodName(){
    try {
      ResponseDto<List<SeatDto>> res = seatService.getSeatAll();

      logger.info("ResponseDto<List<SeatDto>>: {}", res);

      return ResponseEntity.ok().body(res);

    } catch (Exception e) {
      return ResponseEntity.internalServerError().body(new ResponseDto<>("","서버 오류가 발생했습니다. 잠시 후 다시 시도해 주세요."));
    }
    
  }

  @PostMapping("/add")
  public ResponseEntity<ResponseDto<String>> addSeat(@RequestBody SeatDto seatDto) {
      try {
        logger.info("SeatDto: {}", seatDto);

        ResponseDto<String> res = seatService.addSeat(seatDto); 
        return ResponseEntity.ok().body(res);
      } catch (Exception e) {
        return ResponseEntity.internalServerError().body(new ResponseDto<>("", "서버 오류로 인해 좌석 추가에 실패하였습니다. 잠시 후 다시 시도해 주세요."));
      }
  }
}
