import { withIronSession } from "next-iron-session";

export default function withSession(handler) {
  return withIronSession(handler, {
    password: "pw", // 세션 암호화에 사용될 비밀번호
    cookieName: "user-cookie", // 세션 식별을 위한 쿠키 이름
    cookieOptions: {
      secure: process.env.NODE_ENV === "production", // 프로덕션 환경에서만 HTTPS로 설정
    },
  });
}
