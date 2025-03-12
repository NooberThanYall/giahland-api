import { Product } from "@/app/models/ProductSchema";
import connectDB from "@/app/utils/mongodb";
import { NextRequest, NextResponse } from "next/server";


export async function POST(req: NextRequest) {
   await connectDB();
   const body = await req.json();

   try {
      const newProducts = await Product.insertMany(body);
      // console.log();
      
      return NextResponse.json({ newProducts });
   } catch (error) {
      return NextResponse.json({ success: false, error: error.message });
   }
}
