package com.centilionZ.spring_boot.service;

import com.centilionZ.spring_boot.dto.LeaveApplyDTO;
import com.centilionZ.spring_boot.entity.*;
import com.centilionZ.spring_boot.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.time.LocalDate;

@Service
public class LeaveService {

    @Autowired
    private LeaveBalanceRepository leaveBalanceRepository;

    @Autowired
    private LeaveTransactionRepository leaveTransactionRepository;

    @Autowired
    private LeaveApplyRepository leaveApplyRepository;

    @Autowired
    private LeaveTypeRepository leaveTypeRepository;

    @Autowired
    private UserService userService;

    // Get all leave balances
    public List<LeaveBalance> getLeaveBalances() {
        return leaveBalanceRepository.findAll();
    }

    // Get all leave transactions
    public List<LeaveTransaction> getLeaveTransactions() {
        return leaveTransactionRepository.findAll();
    }

    // Get leave transactions by status
    public List<LeaveTransaction> getLeaveTransactionsByStatus(String status) {
        return leaveTransactionRepository.findByStatus(status);
    }

    // Get leave transactions by employee name
    public List<LeaveTransaction> searchLeaveTransactions(String employeeName) {
        return leaveTransactionRepository.findByEmployeeNameContaining(employeeName);
    }

    // *********************** Leave Apply Methods *********************** //

    // Apply for leave
    public LeaveApply applyLeave(LeaveApplyDTO leaveRequest) {
        // Fetch the user, leave type, and apply-to user
        User user = userService.findById(leaveRequest.getUserId());


        LeaveType leaveType = leaveTypeRepository.findById(leaveRequest.getLeaveTypeId())
                .orElseThrow(() -> new RuntimeException("Leave type not found"));

        User applyToUser = userService.findById(leaveRequest.getApplyToUserId());


        User ccUser = null;
        if (leaveRequest.getCcUserId() != null) {
            ccUser = userService.findById(leaveRequest.getCcUserId());

        }

        // Create a new LeaveApply entity
        LeaveApply leaveApply = new LeaveApply();
        leaveApply.setUser(user);
        leaveApply.setLeaveType(leaveType);
        leaveApply.setFromDate(LocalDate.parse(leaveRequest.getFromDate()));
        leaveApply.setFromSession(leaveRequest.getFromSession());
        leaveApply.setToDate(LocalDate.parse(leaveRequest.getToDate()));
        leaveApply.setToSession(leaveRequest.getToSession());
        leaveApply.setApplyToUser(applyToUser);
        leaveApply.setCcUser(ccUser);
        leaveApply.setContactDetails(leaveRequest.getContactDetails());
        leaveApply.setReason(leaveRequest.getReason());
        leaveApply.setAttachmentUrl(leaveRequest.getAttachmentUrl());
        leaveApply.setStatus("Pending");

        // Save the leave application
        return leaveApplyRepository.save(leaveApply);
    }

    // Get all leave applications
    public List<LeaveApply> getLeaveApplications() {
        return leaveApplyRepository.findAll();
    }

    // Get leave application by Leave ID
    public LeaveApply getLeaveApplicationById(Long id) {
        return leaveApplyRepository.findById(id).orElse(null);
    }

    // Update leave application
    public LeaveApply updateLeaveApplication(Long id, LeaveApply updatedLeaveApply) {
        LeaveApply existingLeaveApply = leaveApplyRepository.findById(id).orElse(null);
        if (existingLeaveApply != null) {
            // Update the existing leave application details
            existingLeaveApply.setLeaveType(updatedLeaveApply.getLeaveType());
            existingLeaveApply.setFromDate(updatedLeaveApply.getFromDate());
            existingLeaveApply.setToDate(updatedLeaveApply.getToDate());
            existingLeaveApply.setFromSession(updatedLeaveApply.getFromSession());
            existingLeaveApply.setToSession(updatedLeaveApply.getToSession());
            existingLeaveApply.setApplyToUser(updatedLeaveApply.getApplyToUser());
            existingLeaveApply.setCcUser(updatedLeaveApply.getCcUser());
            existingLeaveApply.setContactDetails(updatedLeaveApply.getContactDetails());
            existingLeaveApply.setReason(updatedLeaveApply.getReason());
            existingLeaveApply.setAttachmentUrl(updatedLeaveApply.getAttachmentUrl());
            existingLeaveApply.setStatus(updatedLeaveApply.getStatus());
            return leaveApplyRepository.save(existingLeaveApply);
        }
        return null;
    }

    // Delete leave application
    public void deleteLeaveApplication(Long id) {
        leaveApplyRepository.deleteById(id);
    }

    // Get leave applications by status
    public List<LeaveApply> getLeaveApplicationsByStatus(String status) {
        return leaveApplyRepository.findByStatus(status);
    }

    // Search leave applications by employee name
    public List<LeaveApply> searchLeaveApplications(String employeeName) {
        return leaveApplyRepository.findByUserNameContaining(employeeName);
    }


    public List<LeaveApply> getLeaveApplicationsForUser(Long userId) {
        User user = userService.findById(userId);

        // Fetch and return leave applications for the user
        return leaveApplyRepository.findByUser(user);
    }
}
