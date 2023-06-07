import db from "./newdb";

export default async function medi(req, res) {
  const { uuid } = req.query;

  db.query(
    `SELECT * FROM medi_settings WHERE uuid = ?`,
    [uuid],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        res.status(200).json({ result });
      }
    }
  );
}
