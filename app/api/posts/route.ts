import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);

  const page = searchParams.get("page") || "0";
  const size = searchParams.get("size") || "10";
  const sortBy = searchParams.get("sortBy") || "latest";
  const category = searchParams.get("category") || "";
  const token = searchParams.get("token") || "";
  try {
    const res = await axios.get("https://swyp.kro.kr/api/posts", {
      withCredentials: true,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        page,
        size,
        sortBy,
        ...(category && category !== "ALL" && { category }),
      },
    });

    return NextResponse.json(res.data, { status: res.status });
  } catch {
    return new Response("게시글 호출 중 오류가 발생했습니다", { status: 500 });
  }
}
