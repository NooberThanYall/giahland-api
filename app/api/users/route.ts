import { User } from "@/app/models/UserSchema";
import connectDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
   await connectDB();

   try {


      const users = await User.find({});

      return NextResponse.json({users})
   } catch (error) {
      return NextResponse.json({error: error.message})
   }
}