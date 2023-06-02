// db 연결

export {};
const mysql = require("mysql2/promise");

const db = mysql.createPool({
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
});

db.getConnection()
  .then(() => {
    console.log("연결됨");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = db;
