package com.exam.test.demo.dto;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class UserDto {
  
  private String userId;
  private String pwd;
  private String userName;
  private List<String> roles;
}
