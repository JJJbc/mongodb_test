package com.exam.test.demo.res;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class ResponseDto<T> {
  
  private String token;
  private T data;
  private String msg;

  public ResponseDto(String token) {
    this.token = token;
  }

  public ResponseDto(T data, String msg){
    this.data = data;
    this.msg = msg;
  }
}
