import db from "../api/db";

export default function newdata(req, res) {
  const { id, name, email } = req.body;
  console.log(id, name, email);
  db.query(
    `insert into users (id, name, email) values (?,?,?)`,
    [id, name, email],
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        res.json(result); // 전송
      }
    }
  );
}
