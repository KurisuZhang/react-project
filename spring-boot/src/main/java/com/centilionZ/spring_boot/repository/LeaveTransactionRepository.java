package com.centilionZ.spring_boot.repository;
import com.centilionZ.spring_boot.entity.LeaveTransaction;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface LeaveTransactionRepository extends JpaRepository<LeaveTransaction, Long> {
    List<LeaveTransaction> findByStatus(String status);
    List<LeaveTransaction> findByEmployeeNameContaining(String employeeName);
}
