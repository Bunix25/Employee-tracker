const inquirer = require('inquirer');
const { departmentSelect, departmentPrompt, departmentInsert, getDepartmentCost, departmentDestroyPrompt, departmentDestroyInsert } = require('./department.js');
const { roleSelect, rolePrompt, roleInsert, roleDestroyPrompt, roleDestroyInsert } = require('./role.js');
const { employeeByManager, employeeByDepartment, employeePrompt, employeeInsert, employeeUpdatePrompt, employeeUpdateReturn, employeeDestroyPrompt, employeeDestroyInsert } = require('./employee.js');
const db = require('../db/connection.js');

const mainMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menu',
            message: 'What would you like to do?',
            choices: [
                new inquirer.Separator('-----VIEW TABLES-----'),
                'View all departments',
                'View all roles',
                'View all employees by manager',
                'View all employees by department',
                'View utilized budget by department',
                new inquirer.Separator('-----ADD TO TABLES-----'),
                'Add a department',
                'Add a role',
                'Add an employee',
                new inquirer.Separator('-----UPDATE TABLES-----'),
                'Update an employee role',
                new inquirer.Separator('-----REMOVE COLUMNS FROM TABLES-----'),
                'Remove a department',
                'Remove a role',
                'Remove an employee'
            ]
        }
    ])
