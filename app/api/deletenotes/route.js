"use server"
import clientPromise from "@/lib/mongodb";
import { currentUser } from "@clerk/nextjs/server";
export async function DELETE(request) {
    const user=currentUser()
        const client = await clientPromise;
        const db = client.db("Vaultify");
        const collection = db.collection("notes");
        const body=await request.json()

            await collection.deleteMany({
                user:body.id
            })
        return Response.json({success:true,message:"deleted successfully"})
        }