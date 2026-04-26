import "server-only";
import { PrismaClient } from "./generated/prisma";

const globalForPrisma = global as unknown as { prisma: PrismaClient };

/**
 * Prisma Client Singleton
 * Ensures only one instance of Prisma is created in development to avoid connection pooling issues.
 */
export const prisma =
  globalForPrisma.prisma ||
  new PrismaClient({
    datasourceUrl: process.env.DATABASE_URL,
  });

if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;
