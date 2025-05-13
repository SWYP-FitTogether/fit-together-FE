import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || "0";
  const size = searchParams.get("size") || "10";
  const postId = searchParams.get("postId") || "";
  const token = searchParams.get("token") || "";
  try {
    const res = await axios.get(
      `http://swyp.kro.kr:8080/api/posts/${postId}/comments`,
      {
        withCredentials: true,
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          page,
          size,
          postId,
        },
      },
    );

    return NextResponse.json(res.data, { status: res.status });
  } catch {
    return new Response("댓글 호출 중 오류가 발생했습니다", { status: 500 });
  }
}
