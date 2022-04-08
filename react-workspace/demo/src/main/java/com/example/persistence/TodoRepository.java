package com.example.persistence;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.example.model.TodoEntity;

@Repository
public interface TodoRepository extends JpaRepository<TodoEntity, String>{
	
//	// ?1은 메서드의 매개변수의 순서위치이다.
//	@Query ("select * from Todo t where t.userId = ?1")
	
	List<TodoEntity> findByUserId(String userId);
}
