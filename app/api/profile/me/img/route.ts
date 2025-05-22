import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();

    const file = formData.get("file") as File | null;
    const token = formData.get("token") as string | null;

    if (!file || !token) {
      return new Response("File or token missing", { status: 500 });
    }

    const outForm = new FormData();
    outForm.append("file", file);

    const res = await axios.post(
      `https://swyp.kro.kr/api/users/me/profile-image`,
      outForm,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      },
    );

    return NextResponse.json(res.data, { status: res.status });
  } catch (error) {
    console.error("업로드 중 오류:", error);
    return new Response("Image upload failed", { status: 500 });
  }
}
