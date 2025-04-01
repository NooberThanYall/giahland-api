import { User } from "@/app/models/UserSchema";
import { encrypt } from "@/app/utils/jwt";
import connectDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  await connectDB();
  const body = await req.json();

  try {
    const userAlrExists = await User.findOne({ phone: body.phone });

    if (!userAlrExists) throw new Error("کاربری با این شماره وجود ندارد");

    if (userAlrExists.password === body.password) {
      const verifiedUser = await encrypt({ ...userAlrExists, password: null });

      return NextResponse.json({ token: verifiedUser });
    } else {
      throw new Error("پسورد غلط");
    }
  } catch (error) {
    return NextResponse.json({ success: false, error: error.message });
  }
}
