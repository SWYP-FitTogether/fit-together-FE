import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body.token;

    const res = await axios.delete(
      `https://swyp.kro.kr/api/comments/${body.commentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    return NextResponse.json({ status: res.status });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
