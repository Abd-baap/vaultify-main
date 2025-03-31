import { currentUser } from "@clerk/nextjs/server";
import clientPromise from "@/lib/mongodb";

export async function GET() {
  
    const client = await clientPromise;
    const db = client.db("Vaultify");
    const collection = db.collection("Credentials");
    
    const user = await currentUser();
    if (!user || !user.id) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }
    
    const body = await collection.find({ user: user.id }).toArray();
    if(body){
    return Response.json({ success: true, body });
    }
    else{
      return Response.json({success:'false',message:'try addidng data'})
    }
  
  
}

