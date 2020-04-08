const connection = require("./server.js");

class db {
    constructor(connection) {
        this.connection = connection;
    }

    findEmployees() {
        return this.connection.query(
            "SELECT employee.id, employee.first_name, employee.last_name, role.title"
        )
    };

    createEmployee() {
        return this.connection.query(
            "INSERT INTO employee SET ?", employee
        )
    };

    removeEmployee(employeeID) {
        return this.connection.query(
            "DELETE FROM employee WHERE id = ?", employeeID// go back and review wording HERE**
        )
    };

    updateEmployee(employeeID, roleID) {
        return this.query(
            "UPDATE employee SET role_id = ? WHERE id = ?", 
            [roleID, employeeID]
        )
    };
};

module.exports = new db(connection);