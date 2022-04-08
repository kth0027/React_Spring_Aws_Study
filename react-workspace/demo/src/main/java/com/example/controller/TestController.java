package com.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.dto.ResponseDTO;
import com.example.dto.TestRequestBodyDTO;

@RestController
@RequestMapping("test") // 리소스
public class TestController {

//	@GetMapping("/testGetMapping")
//	public String testControllerWithPath() {
//		return "Hello World!! testGetMapping";
//	}

//	@GetMapping("/{id}")
//	public String testControllerWithPathVariables( @PathVariable (required = false ) int id) {
//		return "Hello World!! ID" + id;
//	}

//	@GetMapping("/testRequestParam")
//	public String testControllerRequestParam(@RequestParam (required = false) int id) {
//		return "Hello World!! ID" + id;
//	}

//	@GetMapping("/testRequestBody")
//	public String testControllerRequestBody(
//			@RequestBody TestRequestBodyDTO testRequestBodyDTO) {
//		return "Hello World!! ID" + testRequestBodyDTO.getId() + "Message : " + testRequestBodyDTO.getMessage();
//		
//		
//	}

//	@GetMapping("/testResponseBody")
//	public ResponseDTO<String> textControllerResponseBody (){
//		List<String> list = new ArrayList<>();
//		list.add("hello world!! i'm response DTO");
//		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();
//		return response;
//	}

	@GetMapping("/testResponseEntity")
	public ResponseEntity<?> textControllerResponseEntity() {
		List<String> list = new ArrayList<>();
		list.add("hello world!! i'm responseEntity. And you got 400!");
		ResponseDTO<String> response = ResponseDTO.<String>builder().data(list).build();

		// http status를 400으로 설정
//		return ResponseEntity.badRequest().body(response);

		return ResponseEntity.ok().body(response);
	}

}