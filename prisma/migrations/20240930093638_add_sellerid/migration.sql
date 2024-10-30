/*
  Warnings:

  - Added the required column `sellerId` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Chat` ADD COLUMN `sellerId` VARCHAR(191) NOT NULL;
