import { authMiddleware } from "@clerk/nextjs";
import { createMiddleware, shield, detectBot } from "@arcjet/next";

const arcjetMiddleware = createMiddleware(
  {
    key: process.env.ARCJET_KEY,
    rules: [
      shield({
        mode: "LIVE",
      }),
      detectBot({
        mode: "LIVE",
        allow: ["CATEGORY:SEARCH_ENGINE", "GO_HTTP"],
      }),
    ],
  },
  authMiddleware({
    publicRoutes: ["/", "/sign-in", "/sign-up"], // add public routes explicitly
  })
);

export default arcjetMiddleware;

export const config = {
  matcher: [
    "/((?!_next|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|webp|gif|css|js|map)).*)",
  ],
};
