import clientPromise from "@/lib/mongodb";
import { currentUser } from "@clerk/nextjs/server";


export async function DELETE(req) {
  try {
    // Parse the request body to get the id
    const { id } = await req.json();
    const client=await clientPromise;
    const db=client.db('Vaultify')
    const collection=db.collection("Credentials")
    if (!id) {
      return Response.json({ success: false, message: "ID is required" }, { status: 400 });
    }

    // Get the current logged-in user
    const user = await currentUser();
    if (!user || !user.id) {
      return Response.json({ success: false, message: "Unauthorized" }, { status: 401 });
    }

    // Delete the document where `id` and `user` match
    const result = await collection.deleteOne({ id, user: user.id });

    if (result.deletedCount === 1) {
      return Response.json({ success: true, message: "Password deleted successfully" });
    } else {
      return Response.json({ success: false, message: "Password not found" }, { status: 404 });
    }
  } catch (error) {
    console.error("Error deleting password:", error);
    return Response.json({ success: false, message: "Internal Server Error" }, { status: 500 });
  }
}
