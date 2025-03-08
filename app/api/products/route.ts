import { Product } from "@/app/models/ProductSchema";
import connectDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req:NextRequest) {
   await connectDB();

   try {
      const products = await Product.find({});

      return NextResponse.json({success: true, products})
   } catch ({message}) {
      return NextResponse.json({success: false, error: message})
   }
}