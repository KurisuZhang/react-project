package com.centilionZ.spring_boot.controller;

import com.centilionZ.spring_boot.dto.LeaveApplyDTO;
import com.centilionZ.spring_boot.entity.*;
import com.centilionZ.spring_boot.service.LeaveService;
import com.centilionZ.spring_boot.service.UserService;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/leave")
@CrossOrigin
public class LeaveController {

    @Autowired
    private LeaveService leaveService;

    @Autowired
    private UserService userService;

    // *********************** Leave Apply Methods *********************** //
    // 1. Apply for leave
    @PostMapping("/apply")
    public ResponseEntity<LeaveApply> applyLeave(@RequestBody LeaveApplyDTO leaveRequest) {
        LeaveApply savedLeaveApply = leaveService.applyLeave(leaveRequest);
        return ResponseEntity.ok(savedLeaveApply);
    }

    // 2. Get all leave applications
    @GetMapping("/applications")
    public ResponseEntity<List<LeaveApply>> getLeaveApplications() {
        List<LeaveApply> applications = leaveService.getLeaveApplications();
        return ResponseEntity.ok(applications); // Return 200 OK with the list
    }

    // 3. Get leave application by ID
    @GetMapping("/applications/{id}")
    public ResponseEntity<LeaveApply> getLeaveApplicationById(@PathVariable Long id) {
        LeaveApply leaveApply = leaveService.getLeaveApplicationById(id);
        return ResponseEntity.ok(leaveApply); // Return 200 OK with the leave application
    }

    // 4. Update leave application
    @PutMapping("/applications/{id}")
    public ResponseEntity<LeaveApply> updateLeaveApplication(@PathVariable Long id, @RequestBody LeaveApply updatedLeaveApply) {
        LeaveApply updated = leaveService.updateLeaveApplication(id, updatedLeaveApply);
        return ResponseEntity.ok(updated); // Return 200 OK with the updated leave application
    }

    // 5. Delete leave application
    @DeleteMapping("/applications/{id}")
    public ResponseEntity<Void> deleteLeaveApplication(@PathVariable Long id) {
        leaveService.deleteLeaveApplication(id);
        return ResponseEntity.noContent().build(); // Return 204 No Content after successful deletion
    }

    // 6. Get leave applications by status
    @GetMapping("/applications/status/{status}")
    public ResponseEntity<List<LeaveApply>> getLeaveApplicationsByStatus(@PathVariable String status) {
        List<LeaveApply> applications = leaveService.getLeaveApplicationsByStatus(status);
        return ResponseEntity.ok(applications); // Return 200 OK with the list of applications by status
    }

    // 7. Search leave applications by employee name
    @GetMapping("/applications/search")
    public ResponseEntity<List<LeaveApply>> searchLeaveApplications(@RequestParam String employeeName) {
        List<LeaveApply> applications = leaveService.searchLeaveApplications(employeeName);
        return ResponseEntity.ok(applications); // Return 200 OK with the search results
    }

    //8. Get leave applications by user id
    @GetMapping("/applications/{userId}")
    public ResponseEntity<List<LeaveApply>> getLeaveApplicationsForUser(@PathVariable Long userId) {
        try {
            List<LeaveApply> leaveApplications = leaveService.getLeaveApplicationsForUser(userId);
            if (leaveApplications.isEmpty()) {
                return ResponseEntity.noContent().build(); // No content found
            }
            return ResponseEntity.ok(leaveApplications); // Return 200 OK with the list
        } catch (EntityNotFoundException e) {
            return ResponseEntity.notFound().build(); // Return 404 if user not found
        }
    }

    // *********************** Leave Balances Methods *********************** //
    // Get all leave balances
    @GetMapping("/balances")
    public ResponseEntity<List<LeaveBalance>> getLeaveBalances() {
        List<LeaveBalance> balances = leaveService.getLeaveBalances();
        return ResponseEntity.ok(balances); // Return 200 OK with the leave balances
    }

    // *********************** Leave Transaction Methods *********************** //
    // Get all leave transactions
    @GetMapping("/transactions")
    public ResponseEntity<List<LeaveTransaction>> getLeaveTransactions() {
        List<LeaveTransaction> transactions = leaveService.getLeaveTransactions();
        return ResponseEntity.ok(transactions); // Return 200 OK with the leave transactions
    }

    // Get leave transactions by status
    @GetMapping("/transactions/status/{status}")
    public ResponseEntity<List<LeaveTransaction>> getLeaveTransactionsByStatus(@PathVariable String status) {
        List<LeaveTransaction> transactions = leaveService.getLeaveTransactionsByStatus(status);
        return ResponseEntity.ok(transactions); // Return 200 OK with the transactions by status
    }

    // Search leave transactions by employee name
    @GetMapping("/transactions/search")
    public ResponseEntity<List<LeaveTransaction>> searchLeaveTransactions(@RequestParam String employeeName) {
        List<LeaveTransaction> transactions = leaveService.searchLeaveTransactions(employeeName);
        return ResponseEntity.ok(transactions); // Return 200 OK with the search results
    }
}

