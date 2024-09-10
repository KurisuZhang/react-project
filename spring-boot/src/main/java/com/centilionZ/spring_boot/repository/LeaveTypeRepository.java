package com.centilionZ.spring_boot.repository;

import com.centilionZ.spring_boot.entity.LeaveType;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LeaveTypeRepository extends JpaRepository<LeaveType, Long> {
}
