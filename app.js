const express = require('express');
const app = express();
const port = 3000;
const mysql=require("mysql")
const connection=mysql.createConnection({
    host: "localhost",
    user: "root",
    password: '',
    database: "class"
});
// connect to the database
connection.connect(function(error){
    if (error) throw error
    else console.log("Connection to the database was successful!")
});


app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html'); // This code sends the HTML file on GET request
});

app.post('/', (req, res) => {
    res.send(`Dear ${req.body.Surname} you have successfully registered for ${req.body.course}`);
     //The above code fetches the user Surname and the course registered and returns them with the successful registration message.
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${3000}`);
});