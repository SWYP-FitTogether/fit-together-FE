import { IEditProfileInfoRequest } from "@/types/profile";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function PUT(req: NextRequest) {
  try {
    const body: { data: IEditProfileInfoRequest; token: string } =
      await req.json();
    const res = await axios.put(
      "https://swyp.kro.kr/api/users/me/profile",
      body.data,
      {
        headers: {
          Authorization: `Bearer ${body.token}`,
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

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const token = body.token;
    const res = await axios.get(
      `https://swyp.kro.kr/api/users/me/onboarding-info`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
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
