const express = require('express');
const app = express();
const employees = [
    {
        "id": 1,
        "name": "Bruce Wayne",
        "salary": "1,000,000,000",
        "department": "No Parents"
    },
    {
        "id": 2,
        "name": " Harry Potter ",
        "salary": "1,000,000",
        "department": "Magic"
    },
    {
        "id": 3,
        "name": "Alejandro Martinez",
        "salary": "40,000,000",
        "department": "Born Rich"
    },
    {
        "id": 4,
        "name": "Tony Starks",
        "salary": "23,000,000,000",
        "department": "Philantropist"
    },
    {
        "id": 5,
        "name": "Taylor Swift",
        "salary": "400,000",
        "department": "Singing"
    },
    {
        "id": 6,
        "name": "Jack Harlow",
        "salary": "500,000",
        "department": "Singing"
    },
    {
        "id": 7,
        "name": "John Deer",
        "salary": "2,000,000",
        "department": "business"
    },
    {
        "id": 8,
        "name": "Jojo Siwa",
        "salary": "100,000",
        "department": "Singing"
    },
    {
        "id": 9,
        "name": "Kid Cudi ",
        "salary": "12,050,000",
        "department": "Generalist"
    },
    {
        "id": 10,
        "name": "Aaron Hernandez",
        "salary": "0",
        "department": "Prison"
    }
];
app.get('/', (req, res) => {
    res.send('Hello world');
});
app.get('/api/employees', (req, res) => {
    res.send(employees);
});
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(c => c.id === parseInt(req.params.id));
    if (!employee) res.status(404).send('The employee was not found');
    res.send(employee);
});
const port = process.env.PORT || 8090;
app.listen(port, () => console.log(`Listening on port ${port}...`));