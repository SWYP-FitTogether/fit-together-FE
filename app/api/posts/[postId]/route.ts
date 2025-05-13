import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const token = searchParams.get("token") || "";
  const id = searchParams.get("id") || "";
  try {
    const res = await axios.get(`http://swyp.kro.kr:8080/api/posts/${id}`, {
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
