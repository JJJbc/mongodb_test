package com.exam.test.demo.initializer;

import java.util.Arrays;

import org.springframework.boot.CommandLineRunner;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Component;

import com.exam.test.demo.token.TokenService;
import com.exam.test.demo.user.domain.User;
import com.exam.test.demo.user.repository.UserRepository;



@Component
public class DataInitializer implements CommandLineRunner {

  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;
  private final TokenService tokenService;

  public DataInitializer(UserRepository userRepository, PasswordEncoder passwordEncoder, TokenService tokenService) {
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
    this.tokenService = tokenService;
  }

  @Override
  public void run(String... args) {
    if (userRepository.count() == 0) {
      User admin = new User();
      admin.setUserId("admin");
      admin.setUserName("admin");
      admin.setPwd(passwordEncoder.encode("admin1234"));
      admin.setRoles(Arrays.asList("ROLE_SUPER_ADMIN", "ROLE_ADMIN", "ROLE_USER"));

      admin.setToken(tokenService.generateToken(admin.getUserId())); // JWT 생성

      userRepository.save(admin);
    }
  }
}
