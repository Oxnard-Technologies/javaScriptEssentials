const employees = [
    { id: 1, name: 'John Doe', age: 30, department: 'IT', salary: 50000, specialization: 'JavaScript' },
    { id: 2, name: 'Alice Smith', age: 28, department: 'HR', salary: 45000, specialization: 'Python' },
    { id: 3, name: 'Bob Johnson', age: 35, department: 'Finance', salary: 60000, specialization: 'Java' }
];

function displayEmployees() {
    const employeesDetails = employees.map((employee, index) => '<p>' + employee.name + ': ' + employee.age + ' - ' + employee.department + ' - $' + employee.salary + '</p>').join('');
    document.getElementById("employeesDetails").innerHTML = employeesDetails;   
}

function calculateTotalSalaries() {
    const totalSalaries = employees.reduce((acc, employee) => acc + employee.salary, 0);
    alert('Total Salaries: ' + totalSalaries);
}

function displayHREmployees() {
    const HREmployees = employees.filter(employee => employee.department === 'HR');
    const HREmployeesDisplay = HREmployees.map((employee, index) => '<p>' + employee.name + ': ' + employee.age + ' - ' + employee.department + ' - $' + employee.salary + '</p>').join('');
    document.getElementById('employeesDetails').innerHTML = HREmployeesDisplay;
}

function findEmployeeById(id) {
    const EmployeeById = employees.find(employee => employee.id === id);

    if(EmployeeById) {
        document.getElementById('employeesDetails').innerHTML = '<p>' + EmployeeById.name + ': ' + EmployeeById.age + ' - ' + EmployeeById.department + ' - $' + EmployeeById.salary + '</p>';
    } else {
        document.getElementById('employeesDetails').innerHTML = 'No record found for employee with ID ' + id;
    }
}

function findEmployeeBySpecialization(s) {
    const EmployeeBySpecialization = employees.find(employee => employee.specialization === s);

    if (EmployeeBySpecialization) {
        document.getElementById('employeesDetails').innerHTML = '<p>' + EmployeeBySpecialization.name + ': ' + EmployeeBySpecialization.age + ' - ' + EmployeeBySpecialization.department + ' - $' + EmployeeBySpecialization.salary + ' - ' + EmployeeBySpecialization.specialization + '</p>';
    }else {
        document.getElementById('employeesDetails').innerHTML = 'No record found.'
    }
}

