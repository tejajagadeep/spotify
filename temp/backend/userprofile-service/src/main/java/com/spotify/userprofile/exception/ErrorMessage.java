package com.spotify.userprofile.exception;

import lombok.AllArgsConstructor;
import lombok.Getter;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import java.util.Date;

//@Component
public class ErrorMessage {
    private Date timeStamp;
    private String message;
    private HttpStatus status;


    public Date getTimeStamp() {
        return timeStamp;
    }

    public void setTimeStamp(Date timeStamp) {
        this.timeStamp = timeStamp;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public HttpStatus getStatus() {
        return status;
    }

    public void setStatus(HttpStatus status) {
        this.status = status;
    }

    public ErrorMessage(Date timeStamp, String message, HttpStatus status) {
        super();
        this.timeStamp = timeStamp;
        this.message = message;
        this.status = status;
    }

    public ErrorMessage() {
        super();
    }



}