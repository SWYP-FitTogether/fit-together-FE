import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const token = searchParams.get("token") || "";
  const id = searchParams.get("id") || "";
  try {
    const res = await axios.get(`https://swyp.kro.kr/api/posts/${id}`, {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch {
    return new Response("게시글 호출 중 오류가 발생했습니다", { status: 500 });
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body.token;

    const res = await axios.delete(
      `https://swyp.kro.kr/api/posts/${body.postId}`,
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
