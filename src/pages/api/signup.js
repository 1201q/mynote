import db from "./newdb";

export default async function signup(req, res) {
  const { id, pw, email, name } = req.query;

  // 아이디 중복 카운트
  db.query(
    `SELECT COUNT(*) AS idCount FROM member WHERE id = ?`,
    [id],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: "Internal Server Error" });
      } else {
        const idCount = result[0].idCount;

        // 이메일 중복 카운트
        db.query(
          `SELECT COUNT(*) AS emailCount FROM member WHERE email = ?`,
          [email],
          async (err, result) => {
            if (err) {
              res.status(500).json({ error: "Internal Server Error" });
            } else {
              const emailCount = result[0].emailCount;

              // 아이디와 이메일 중복 체크
              if (idCount > 0) {
                res.status(409).json({ error: "중복된 아이디입니다." });
              } else if (emailCount > 0) {
                res.status(409).json({ error: "중복된 이메일입니다." });
              } else {
                db.query(
                  `INSERT INTO member (id, pw, email, name) VALUES (?, ?, ?, ?)`,
                  [id, pw, email, name],
                  async (err, result) => {
                    if (err) {
                      res.status(500).json({ error: "Internal Server Error" });
                    } else {
                      //세션
                      res.status(200).json({ connection: "ok" });
                    }
                  }
                );
              }
            }
          }
        );
      }
    }
  );
}
