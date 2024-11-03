/*
  Warnings:

  - You are about to alter the column `data_nascimento` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.
  - Added the required column `nome` to the `User` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `user` ADD COLUMN `nome` VARCHAR(100) NOT NULL,
    MODIFY `data_nascimento` DATETIME NOT NULL;
