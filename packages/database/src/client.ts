// ============================================================
// @vierp/database - Prisma Client Singleton
// Shared database client with connection pooling
// ============================================================

import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as {
  prisma: unknown;
};

const prismaLogLevels: ("query" | "error" | "warn")[] =
  process.env.NODE_ENV === "development"
    ? ["query", "error", "warn"]
    : ["error"];

const prismaClient = () =>
  new PrismaClient({
    log: prismaLogLevels,
  });

export const prisma = (globalForPrisma.prisma ?? prismaClient()) as unknown;

if (process.env.NODE_ENV !== "production") {
  globalForPrisma.prisma = prisma;
}
