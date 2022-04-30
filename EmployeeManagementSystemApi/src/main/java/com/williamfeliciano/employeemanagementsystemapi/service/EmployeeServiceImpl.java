package com.williamfeliciano.employeemanagementsystemapi.service;

import com.williamfeliciano.employeemanagementsystemapi.entity.EmployeeEntity;
import com.williamfeliciano.employeemanagementsystemapi.exceptions.EmployeeNotFoundException;
import com.williamfeliciano.employeemanagementsystemapi.model.Employee;
import com.williamfeliciano.employeemanagementsystemapi.repository.EmployeeRepository;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class EmployeeServiceImpl implements EmployeeService {

    private EmployeeRepository employeeRepository;

    @Autowired
    public EmployeeServiceImpl(EmployeeRepository employeeRepository) {
        this.employeeRepository = employeeRepository;
    }

    @Override
    public Employee createEmployee(Employee employee) {
        EmployeeEntity employeeEntity = new EmployeeEntity();

        BeanUtils.copyProperties(employee, employeeEntity);
        employeeRepository.save(employeeEntity);
        return employee;
    }

    @Override
    public List<Employee> getAllEmployees() {
        List<EmployeeEntity> employeeEntities
                = employeeRepository.findAll();

        List<Employee> employees = employeeEntities
                .stream()
                .map(emp -> new Employee(
                        emp.getId(),
                        emp.getFirstName(),
                        emp.getLastName(),
                        emp.getEmail(),
                        emp.getPhoneNumber(),
                        emp.getAddress(),
                        emp.getCity(),
                        emp.getState(),
                        emp.getZipCode(),
                        emp.getCountry(),
                        emp.getDepartment()
                )).collect(Collectors.toList());
        return employees;
    }

    @Override
    public boolean deleteEmployee(Long id) throws EmployeeNotFoundException {
        EmployeeEntity employee = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));;
        employeeRepository.delete(employee);
        return true;
    }

    @Override
    public Employee getEmployeeById(Long id) throws EmployeeNotFoundException {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
        Employee employee = new Employee();
        BeanUtils.copyProperties(employeeEntity, employee);
        return employee;
    }

    @Override
    public Employee updateEmployee(Long id, Employee employee) throws EmployeeNotFoundException {
        EmployeeEntity employeeEntity
                = employeeRepository.findById(id).orElseThrow(() -> new EmployeeNotFoundException("Employee not found"));
        employeeEntity.setId(employee.getId());
        employeeEntity.setFirstName(employee.getFirstName());
        employeeEntity.setLastName(employee.getLastName());
        employeeEntity.setEmail(employee.getEmail());
        employeeEntity.setPhoneNumber(employee.getPhoneNumber());
        employeeEntity.setAddress(employee.getAddress());
        employeeEntity.setCity(employee.getCity());
        employeeEntity.setState(employee.getState());
        employeeEntity.setZipCode(employee.getZipCode());
        employeeEntity.setCountry(employee.getCountry());
        employeeEntity.setDepartment(employee.getDepartment());
        employeeRepository.save(employeeEntity);
        return employee;
    }
}
