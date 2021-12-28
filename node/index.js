const express = require("express");
const faker = require("faker");

const app = express();
const port = 3000;
const config = {
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
};
const mysql = require("mysql");
const connection = mysql.createConnection(config);

const createTable = `CREATE TABLE IF NOT EXISTS people (
    id int(11) NOT NULL auto_increment,
    name varchar(250) NOT NULL,
    PRIMARY KEY (id)
    );`;

connection.query(createTable);

const randomName = faker.name.findName();
const insertValue = `INSERT INTO people(name) values('${randomName}')`;

connection.query(insertValue);

let people = [];

connection.query("SELECT * from people", function (error, results) {
  if (error) throw error;
  people = results;
});

connection.end();

app.get("/", (req, res) => {
  res.send(`<h1>Full Cycle Rocks!</h1>
      <ul>
          ${people.map((person) => `<li>${person.name}</li>`).join("")}
      </ul>
    `);
});

app.listen(port, () => {
  console.log("Rodando na porta " + port);
});
