package com.williamfeliciano.employeemanagementsystemapi.repository;

import com.williamfeliciano.employeemanagementsystemapi.entity.EmployeeEntity;
import com.williamfeliciano.employeemanagementsystemapi.model.Employee;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EmployeeRepository extends JpaRepository<EmployeeEntity, Long> {
}
