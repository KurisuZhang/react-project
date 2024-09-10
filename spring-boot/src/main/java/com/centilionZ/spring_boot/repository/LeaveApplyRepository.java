package com.centilionZ.spring_boot.repository;

import com.centilionZ.spring_boot.entity.LeaveApply;
import com.centilionZ.spring_boot.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface LeaveApplyRepository extends JpaRepository<LeaveApply, Long> {

    List<LeaveApply> findByStatus(String status);
    List<LeaveApply> findByUserNameContaining(String employeeName);
    List<LeaveApply> findByUser(User user);
}
