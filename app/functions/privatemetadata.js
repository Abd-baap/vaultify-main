"use server"


// privatemetadata.js (Fixed Version)
import { NextRequest, NextResponse } from "next/server";
import { clerkClient } from "@clerk/nextjs/server";
import crypto from "crypto";
import bcrypt from "bcryptjs";
import { currentUser } from "@clerk/nextjs/server";

export async function Adding(userId, code) {
  try {
    const salt = crypto.randomBytes(16).toString("hex"); // Secure random salt
    const hashedCode = await bcrypt.hash(code, 10);
    const key = crypto.scryptSync(code, salt, 32).toString("hex");
    const client= clerkClient
 
    await client.users.updateUserMetadata(userId, {
      privateMetadata: {
        Mastercode: hashedCode,
        user: userId,
        key
      }
    });
  } catch (error) {
    console.error("Error in Adding function:", error);
  }
}

export async function Getting() {
  try {
    const user = await currentUser();
    if (!user || !user.id) {
      return { success: false, reason: "Unauthorized" };
    }
    
    return user.privateMetadata || { success: false, reason: "No private metadata found" };
  } catch (error) {
    console.error("Error in Getting function:", error);
    return { success: false, reason: "Internal Server Error" };
  }
}
