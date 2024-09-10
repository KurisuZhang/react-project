package com.centilionZ.spring_boot.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class LeaveApplyDTO {
    private Long userId;
    private Long leaveTypeId;
    private String fromDate;
    private String fromSession;
    private String toDate;
    private String toSession;
    private Long applyToUserId;
    private Long ccUserId;
    private String contactDetails;
    private String reason;
    private String attachmentUrl;
}