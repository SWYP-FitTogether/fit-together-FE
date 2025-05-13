// app/api/auth/kakao/route.ts
import { IOnboardInfo } from "@/types/auth";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const body: { data: IOnboardInfo; acccessToken: string } = await req.json();
    const res = await axios.put(
      "http://swyp.kro.kr:8080/api/users/onboarding",
      body.data,
      {
        headers: {
          Authorization: `Bearer ${body.acccessToken}`,
          "Content-Type": "application/json",
        },
        withCredentials: true,
      },
    );

    const data = res.data;
    return NextResponse.json(data, { status: res.status });
  } catch (error) {
    console.error(error);
    return new Response("Internal Server Error", { status: 500 });
  }
}
