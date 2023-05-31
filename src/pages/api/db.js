// db 연결

export {};
const mysql = require("mysql2");

const db = mysql.createConnection({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("연결됨");
  }
});

module.exports = db;
