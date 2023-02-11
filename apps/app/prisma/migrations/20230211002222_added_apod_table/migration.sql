-- CreateTable
CREATE TABLE "Apod" (
    "id" TEXT NOT NULL,
    "copyright" TEXT NOT NULL,
    "date" TEXT NOT NULL,
    "explanation" TEXT NOT NULL,
    "hdurl" TEXT NOT NULL,
    "media_type" TEXT NOT NULL,
    "service_version" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Apod_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE INDEX "Apod_date_idx" ON "Apod"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Apod_date_key" ON "Apod"("date");
