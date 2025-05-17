import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookie = req.headers.get("cookie") || "";

    const res = await axios.post("https://swyp.kro.kr/api/auth/logout", null, {
      headers: {
        Cookie: cookie,
        "Content-Type": "application/json",
      },
      withCredentials: true,
    });

    const setCookieHeader = res.headers["set-cookie"];
    const response = NextResponse.json({ success: true });

    if (Array.isArray(setCookieHeader)) {
      setCookieHeader.forEach((cookie) => {
        response.headers.append("Set-Cookie", cookie);
      });
    } else if (setCookieHeader) {
      response.headers.set("Set-Cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error("Logout failed:", error);
    return new Response("Logout failed", { status: 500 });
  }
}
