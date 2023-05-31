import db from "./db";

export default function test(req, res) {
  const { type } = req.query;

  if (
    ["member", "medi_settings", "medi_taken", "done", "status"].includes(type)
  ) {
    db.query(`SELECT * FROM ${type}`, function (err, result) {
      if (err) {
        console.log(err);
      } else {
        console.log(result);
        res.json(result); // 전송.
      }
    });
  } else {
    res.status(400).json({ error: "Invalid Request" });
  }
}
