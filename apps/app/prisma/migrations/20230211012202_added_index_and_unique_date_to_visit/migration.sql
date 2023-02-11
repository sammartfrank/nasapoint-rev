/*
  Warnings:

  - A unique constraint covering the columns `[date]` on the table `Visit` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE INDEX "Visit_date_idx" ON "Visit"("date");

-- CreateIndex
CREATE UNIQUE INDEX "Visit_date_key" ON "Visit"("date");
