import { PrismaClient } from "@prisma/client";

//  Define a global variable to hold the Prisma client instance
const globalForPrisma = globalThis as unknown as { prisma: PrismaClient };

//  Create a single PrismaClient instance or reuse the existing one
export const db = globalForPrisma.prisma || new PrismaClient();

//  During development, attach Prisma to the global object
if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = db;
