// app/api/auth/kakao/route.ts
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const res = await axios.post("https://swyp.kro.kr/api/auth/kakao", body, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    });

    const setCookieHeader = res.headers["set-cookie"];

    const response = NextResponse.json(res.data, { status: res.status });

    if (Array.isArray(setCookieHeader)) {
      setCookieHeader.forEach((cookie) => {
        response.headers.append("Set-Cookie", cookie);
      });
    } else if (setCookieHeader) {
      response.headers.set("Set-Cookie", setCookieHeader);
    }

    return response;
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
