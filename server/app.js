const fs = require("fs");
const Users = require("./Users");
const CSV_FILE = fs.readFileSync("./csv/persona-data.csv", "utf-8");
const USERS = new Users(CSV_FILE);

// Output .db file for json-server
// Doc: https://my-json-server.typicode.com/
// Must be under 10kb
fs.writeFileSync("./db.json", JSON.stringify({ users: USERS.users }));
