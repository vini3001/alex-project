/*
  Warnings:

  - You are about to alter the column `data_nascimento` on the `user` table. The data in that column could be lost. The data in that column will be cast from `DateTime(0)` to `DateTime`.

*/
-- AlterTable
ALTER TABLE `user` MODIFY `data_nascimento` DATETIME NOT NULL;
