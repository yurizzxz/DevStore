/*
  Warnings:

  - Added the required column `description` to the `Produto` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Produto" ADD COLUMN     "description" TEXT NOT NULL;
