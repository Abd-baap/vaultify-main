"use server"
import clientPromise from "@/lib/mongodb";

import { clerkClient } from "@clerk/nextjs/server";
import { currentUser } from "@clerk/nextjs/server";
export async function DELETE(request){
    const user=currentUser()
    
    const client = await clientPromise;
    const db = client.db("Vaultify");
    const collection = db.collection("Credentials");
    const clerkclient=await clerkClient()
    const body=await request.json()

        await collection.deleteMany({
            user:body.id
        })
        await clerkclient.users.updateUserMetadata(body.id, {
            privateMetadata: {
              Mastercode: '',
              user: '',
              key:""
            }
          })
          return Response.json({success:"true",message:"deleted all data and mastercode is reset now"})
    
}