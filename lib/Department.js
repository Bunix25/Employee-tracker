const db = require('../db/connection.js');

const departmentSelect = `SELECT * FROM departments`;

const departmentPrompt = [
    {
        type: 'input',
        name: 'deptName',
        message: 'What is the department name?'
    }
];

const departmentInsert = (({ deptName }) => {
    const sql = `INSERT INTO departments (name) VALUES (?)`;
    const params = deptName;
    db.query(sql, params, (err, res) => {});
});

const getDepartmentCost = `
SELECT departments.name AS department, SUM(roles.salary) AS cost 
FROM employees
LEFT JOIN roles ON role_id = roles.id
LEFT JOIN departments ON roles.department_id = departments.id 
GROUP BY department`;
