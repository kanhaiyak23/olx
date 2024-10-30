/*
  Warnings:

  - You are about to drop the column `updatedAt` on the `Chat` table. All the data in the column will be lost.
  - You are about to drop the `ChatParticipant` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Message` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `User` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `chatId` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `senderId` to the `Chat` table without a default value. This is not possible if the table is not empty.
  - Added the required column `text` to the `Chat` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `ChatParticipant` DROP FOREIGN KEY `ChatParticipant_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `ChatParticipant` DROP FOREIGN KEY `ChatParticipant_userId_fkey`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_chatId_fkey`;

-- DropForeignKey
ALTER TABLE `Message` DROP FOREIGN KEY `Message_senderId_fkey`;

-- AlterTable
ALTER TABLE `Chat` DROP COLUMN `updatedAt`,
    ADD COLUMN `chatId` VARCHAR(191) NOT NULL,
    ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `senderId` VARCHAR(191) NOT NULL,
    ADD COLUMN `text` VARCHAR(191) NOT NULL;

-- DropTable
DROP TABLE `ChatParticipant`;

-- DropTable
DROP TABLE `Message`;

-- DropTable
DROP TABLE `User`;
