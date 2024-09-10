package com.centilionZ.spring_boot.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDate;
import java.time.LocalDateTime;


@AllArgsConstructor
@NoArgsConstructor
@Data
@Entity
public class LeaveApply{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @ManyToOne
    @JoinColumn(name = "leave_type_id", nullable = false)
    private LeaveType leaveType;

    private LocalDate fromDate;
    private String fromSession;
    private LocalDate toDate;
    private String toSession;

    @ManyToOne
    @JoinColumn(name = "apply_to_user_id", nullable = false)
    private User applyToUser;

    @ManyToOne
    @JoinColumn(name = "cc_user_id")
    private User ccUser;

    private String contactDetails;
    private String reason;
    private String attachmentUrl;
    private String status = "Pending";

    private LocalDateTime createdAt = LocalDateTime.now();
    private LocalDateTime updatedAt = LocalDateTime.now();


}
