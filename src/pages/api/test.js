import db from "../api/db";

export default function test(req, res) {
  db.query("SELECT * FROM users", function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.log(result);
      res.json(result); // 전송.
    }
  });
}
