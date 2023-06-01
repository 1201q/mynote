import db from "./db";

export default function login(req, res) {
  const { id, pw } = req.query;
  db.query(
    `SELECT * FROM member Where id = ? AND pw = ?`,
    [id, pw],
    function (err, result) {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        if (result.length > 0) {
          const { uuid } = result[0];
          res.status(200).json({ connection: "ok", uuid });
        } else {
          res.status(404).json({ message: "다시 시도해주세요." });
        }
      }
    }
  );
}
