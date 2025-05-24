import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body.token;

    const res = await axios.post(
      `https://swyp.kro.kr/api/auth/daily-login`,
      null,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    const response = NextResponse.json(res.data, { status: res.status });

    return response;
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
