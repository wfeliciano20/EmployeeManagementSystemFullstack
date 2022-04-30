package com.williamfeliciano.employeemanagementsystemapi.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

import java.util.function.Supplier;

@ResponseStatus(value = HttpStatus.NOT_FOUND)
public class EmployeeNotFoundException extends Exception  {
    public EmployeeNotFoundException(String message) {
        super(message);
    }
}
