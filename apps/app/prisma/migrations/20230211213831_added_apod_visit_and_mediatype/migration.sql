-- CreateEnum
CREATE TYPE "mediaType" AS ENUM ('image', 'video');

-- CreateTable
CREATE TABLE "Apod" (
    "id" TEXT NOT NULL,
    "copyright" TEXT,
    "date" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "hdurl" TEXT,
    "media_type" "mediaType" NOT NULL DEFAULT 'image',
    "service_version" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apod_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Visit" (
    "id" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "date" TEXT NOT NULL,
    "updatedAt" TIMESTAMP(3) NOT NULL,
    "count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Visit_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Apod_date_idx" ON "Apod"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Apod_date_key" ON "Apod"("date");

-- CreateIndex
CREATE INDEX "Visit_date_idx" ON "Visit"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Visit_date_key" ON "Visit"("date");
