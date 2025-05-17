import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body.token;
    const page = body.page;
    const size = body.size;
    const res = await axios.get(`https://swyp.kro.kr/api/users/me/posts`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
      params: {
        page,
        size,
      },
    });

    const data = res.data;
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
