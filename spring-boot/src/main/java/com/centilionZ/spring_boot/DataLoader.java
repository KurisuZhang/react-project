package com.centilionZ.spring_boot;

import com.centilionZ.spring_boot.entity.LeaveBalance;
import com.centilionZ.spring_boot.entity.LeaveType;
import com.centilionZ.spring_boot.entity.User;
import com.centilionZ.spring_boot.repository.LeaveBalanceRepository;
import com.centilionZ.spring_boot.repository.LeaveTypeRepository;
import com.centilionZ.spring_boot.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class DataLoader implements CommandLineRunner {

    @Autowired
    private LeaveBalanceRepository leaveBalanceRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private LeaveTypeRepository leaveTypeRepository;

    @Override
    public void run(String... args) throws Exception {
        // Sample Users
        User user1 = new User();
        user1.setName("John Doe");
        user1.setEmail("john@example.com");
        user1.setContactDetails("123-456-7890");

        User user2 = new User();
        user2.setName("Jane Smith");
        user2.setEmail("jane@example.com");
        user2.setContactDetails("098-765-4321");

        User user3 = new User();
        user3.setName("Eileen");
        user3.setEmail("eileen@example.com");
        user3.setContactDetails("123-765-4321");

        User user4 = new User();
        user4.setName("Xi");
        user4.setEmail("xi@example.com");
        user4.setContactDetails("125-765-4321");

        User user5 = new User();
        user5.setName("Shuai");
        user5.setEmail("shuai@example.com");
        user5.setContactDetails("126-765-4321");



        userRepository.save(user1);
        userRepository.save(user2);
        userRepository.save(user3);
        userRepository.save(user4);
        userRepository.save(user5);

        //Sample Leave Types
        LeaveType type1 = new LeaveType();
        type1.setName("Loss Of Pay");
        LeaveType type2 = new LeaveType();
        type2.setName("Comp-Off");
        LeaveType type3 = new LeaveType();
        type3.setName("Casual Leave");

        leaveTypeRepository.save(type1);
        leaveTypeRepository.save(type2);
        leaveTypeRepository.save(type3);


        // Sample Leave Balances
        LeaveBalance lb1 = new LeaveBalance();
        lb1.setLeaveType(type1);
        lb1.setBalance(0);
        lb1.setGranted(1);
        lb1.setConsumed(2);
        leaveBalanceRepository.save(lb1);

        LeaveBalance lb2 = new LeaveBalance();
        lb2.setLeaveType(type2);
        lb2.setBalance(0);
        lb2.setGranted(0);
        lb2.setConsumed(0);
        leaveBalanceRepository.save(lb2);

        LeaveBalance lb3 = new LeaveBalance();
        lb3.setLeaveType(type3);
        lb3.setBalance(12);
        lb3.setGranted(12);
        lb3.setConsumed(0);
        leaveBalanceRepository.save(lb3);
    }

}
