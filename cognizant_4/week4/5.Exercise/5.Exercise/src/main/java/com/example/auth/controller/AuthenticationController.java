package com.example.auth.controller;

import com.example.auth.util.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Base64;

@RestController
public class AuthenticationController {

    @Autowired
    private JwtUtil jwtUtil;

    @GetMapping("/authenticate")
    public TokenResponse authenticate(HttpServletRequest request) {
        try {
            String authHeader = request.getHeader("Authorization");
            System.out.println(">>> Authorization Header: " + authHeader);

            if (authHeader != null && authHeader.startsWith("Basic ")) {
                String base64Credentials = authHeader.substring("Basic ".length());
                byte[] credDecoded = Base64.getDecoder().decode(base64Credentials);
                String credentials = new String(credDecoded);
                System.out.println(">>> Decoded Credentials: " + credentials);

                String username = credentials.split(":", 2)[0];
                System.out.println(">>> Username extracted: " + username);

                String token = jwtUtil.generateToken(username);
                System.out.println(">>> Generated Token: " + token);

                return new TokenResponse(token);
            }

            throw new RuntimeException("Missing or invalid Authorization header");

        } catch (Exception e) {
            System.out.println(">>> Exception caught:");
            e.printStackTrace(); // This will now print the actual error
            throw new RuntimeException("Error during token generation: " + e.getMessage());
        }
    }

    static class TokenResponse {
        private String token;

        public TokenResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }
}
