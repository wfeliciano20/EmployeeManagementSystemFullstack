package com.williamfeliciano.employeemanagementsystemapi.service;

import com.williamfeliciano.employeemanagementsystemapi.exceptions.EmployeeNotFoundException;
import com.williamfeliciano.employeemanagementsystemapi.model.Employee;
import org.springframework.stereotype.Service;

import java.util.List;


public interface EmployeeService {
    Employee createEmployee(Employee employee);

    List<Employee> getAllEmployees();

    boolean deleteEmployee(Long id) throws EmployeeNotFoundException;

    Employee getEmployeeById(Long id) throws EmployeeNotFoundException;

    Employee updateEmployee(Long id, Employee employee) throws EmployeeNotFoundException;
}
