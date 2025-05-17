import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const cookie = req.headers.get("cookie") || "";

    const res = await axios.post(
      "https://swyp.kro.kr/api/auth/refresh-token",
      null,
      {
        headers: {
          Cookie: cookie,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    const setCookieHeader = res.headers["set-cookie"];
    let accessToken: string | null = null;

    if (Array.isArray(setCookieHeader)) {
      for (const cookie of setCookieHeader) {
        if (cookie.startsWith("access_token=")) {
          accessToken = cookie
            .split(";")[0]
            .replace("access_token=", "")
            .trim();
          break;
        }
      }
    }

    const response = NextResponse.json({
      success: true,
      accessToken,
    });

    // 클라이언트에도 쿠키 반영
    if (Array.isArray(setCookieHeader)) {
      setCookieHeader.forEach((cookie) => {
        response.headers.append("Set-Cookie", cookie);
      });
    } else if (setCookieHeader) {
      response.headers.set("Set-Cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error("Refresh token request failed:", error);
    return new Response("Refresh failed", { status: 401 });
  }
}
