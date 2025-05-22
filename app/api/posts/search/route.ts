import { ISearchRequest } from "@/types/search";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body.token;
    const value = body.data as ISearchRequest;
    const page = body.page;

    const res = await axios.get(`https://swyp.kro.kr/api/posts/search`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      params: {
        ...value,
        page,
      },
      withCredentials: true,
    });

    const data = res.data;
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
