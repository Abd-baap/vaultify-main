import clientPromise from "@/lib/mongodb";
import crypto from "crypto";
import { Getting } from "../functions/privatemetadata";
// import { Response } from "next/server";

export async function POST(request) {
  
    const algorithm = "aes-256-cbc";
    const iv = crypto.randomBytes(16); // Keep IV as a Buffer
    
    const client = await clientPromise;
    const db = client.db("Vaultify");
    const collection = db.collection("Credentials");
    
    const body = await request.json();
    const userMetadata = await Getting();
    if (!userMetadata || !userMetadata.key) {
      return Response.json({ success: false, message: "Unauthorized: Missing encryption key." }, { status: 401 });
    }

    const secretSalt = process.env.SECRET_SALT; // Extra security layer
  const key = Buffer.from(userMetadata.key, "hex"); // Convert key to buffer
          
    const cipher = crypto.createCipheriv(algorithm, key, iv);
    let encrypted = cipher.update(body.password, "utf8", "hex");
    encrypted += cipher.final("hex");
    
    await collection.insertOne({
      website: body.website,
      username: body.username,
      password: encrypted,
      user: body.user,
      iv: iv.toString("hex"),
      id:body.id
    });
    
    return Response.json({ success: true, message: "Data added successfully" });

}
