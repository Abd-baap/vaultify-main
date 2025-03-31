"use server"
import { currentUser } from "@clerk/nextjs/server";
// import { RateLimiterMemory } from "rate-limiter-flexible";
// import { Response } from "next/server";
import clientPromise from "@/lib/mongodb";



export async function GET() {
  
    const client = await clientPromise;
    const db = client.db("Vaultify");
    const collection = db.collection("notes");
    
    const user = await currentUser();
    if (!user || !user.id) {
      return Response.json({ success: false, message: "Unauthorized" });
    }
    
    const body = await collection.find({ user: user.id }).toArray()
    
    if(body){
    return Response.json({ success: 'true', body:body });
    }
    else{
      return Response.json({succes:"false",message:"no data was fetched"})
    }
}

