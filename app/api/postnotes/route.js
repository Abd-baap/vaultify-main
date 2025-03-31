import clientPromise from "@/lib/mongodb";
import crypto from "crypto";
// import { Response } from "next/server";


export async function handler(req, res) {
  try {
    await rateLimiter.consume(req.ip);
    res.status(200).json({ message: "Request successful" });
  } catch (err) {
    res.status(429).json({ message: "Too many requests" });
  }
}

export async function POST(request) {
  try {
    
    const client = await clientPromise;
    const db = client.db("Vaultify");
    const collection = db.collection("notes");
    
    const body = await request.json();
  
    
    await collection.insertOne({
      note:body.note,
      image:body.image,
      list:body.list,
      user:body.user
    });
    
    return Response.json({ success: true, message: "Data added successfully" });
  } catch (error) {
    console.error("Error in POST route:", error);
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
