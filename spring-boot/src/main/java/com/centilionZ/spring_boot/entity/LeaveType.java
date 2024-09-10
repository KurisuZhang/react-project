package com.centilionZ.spring_boot.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Set;


@NoArgsConstructor
@AllArgsConstructor
@Data
@Entity
@Table(name = "leave_type")
public class LeaveType {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "name", nullable = false)
    private String name;

    @OneToMany(mappedBy = "leaveType", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LeaveApply> leaveApplications;

    @OneToMany(mappedBy = "leaveType", cascade = CascadeType.ALL, orphanRemoval = true)
    private Set<LeaveBalance> leaveBalances;
}

