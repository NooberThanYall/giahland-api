
import connectDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";
import { User } from '@/app/models/UserSchema';
import { encrypt } from "@/app/utils/jwt";

export async function POST(req:NextRequest) {
   await connectDB();
   const body = await req.json();

   try {
      const userAlrExists = await User.findOne({email: body.email});

      if(userAlrExists) throw new Error('کاربر ثبت شده است. لطفا وارد شوید');

      const newUser = await User.create({...body});

      const verifiedUser = await encrypt({...newUser, password: null})
      return NextResponse.json({success: true, token: verifiedUser})
   } catch (error) {
      return NextResponse.json({success: false, error: error.message})
   }
}