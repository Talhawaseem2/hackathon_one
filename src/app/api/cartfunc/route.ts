import { cartTableDrizzle, db } from "@/lib/drizzle";
import { error } from "console";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";

export async function GET() {
    try {
        let allCartData = await db.select().from(cartTableDrizzle)
        console.log("data : " , allCartData)
        return NextResponse.json({allCartData})
    } catch (error) {
        console.log("error :" , (error as {message: string}).message)
        return NextResponse.json({ error})
    }
};



export async function POST (req : NextRequest) {
    let request = await req.json();
    console.log(request)
    try {
        if(request.product_id && request.quantity){
      let response = await db.insert(cartTableDrizzle).values(request).returning();
      return NextResponse.json({response})
    }else{
        throw Error("please put product_id quantity")
    }
    } catch (error) {
        console.log("error :" , (error as {message: string}).message)
        return NextResponse.json({ error})
    }
}


export async function PUT (req : NextRequest) {
    let request = await req.json();

    try {
        let response = await db.update(cartTableDrizzle).set(request).where(eq(cartTableDrizzle.product_id, request.product_id)).returning()
        console.log(response)
        return NextResponse.json({response})
    } catch (error) {
        console.log("error :" , (error as {message: string}).message)
        return NextResponse.json({ error})
    }
}


export async function DELETE (req : NextRequest) {
    let url = req.nextUrl.searchParams;
    console.log("url :" , url)
    try {
        if(url.has("product_id")){
           let response = await db.delete(cartTableDrizzle).where(eq(cartTableDrizzle.product_id , (url.get("product_id") as string))).returning()
           console.log(response)
           return NextResponse.json({response})
        }
    } catch (error) {
        console.log("error :" , (error as {message: string}).message)
        return NextResponse.json({ error})        
    }
}
