"use server";

import { db } from "@/lib/db";
import { currentUser } from "@clerk/nextjs/server";
import { getAvailableUsernameSuggestions } from "../utils";

export const checkProfileUsernameAvailability = async (username: string) => {
  if (!username) return { available: false, suggestions: [] };

  const user = await db.user.findUnique({
    where: { username },
  });

  if (!user) {
    return { available: true, suggestions: [] };
  }

  const suggestions = await getAvailableUsernameSuggestions(username, 3, 10);

  return {
    available: false,
    suggestions,
  };
};

export const claimUsername = async (username: string) => {
  const loggedInUser = await currentUser();

  if (!loggedInUser) {
    return { success: false, error: "No authenticated user found" };
  }

  try {
    const user = await db.user.update({
      where: {
        clerkId: loggedInUser.id, 
      },
      data: {
        username,
      },
    });

    if (!user) {
      return { success: false, error: "Failed to update user" };
    }

    return { success: true };
  } catch (error: any) {
    // Handles case where username might already exist (unique constraint)
    if (error.code === "P2002") {
      return { success: false, error: "Username is already taken" };
    }

    console.error("Error claiming username:", error);
    return { success: false, error: "An unexpected error occurred" };
  }
};

export const getCurrentUsername = async()=>{
  const user = await currentUser();

  const getCurrentUsername = await db.user.findUnique({
    where:{
      clerkId:user?.id
    },
    select:{
      username:true,
      bio:true
    }
  })
}
