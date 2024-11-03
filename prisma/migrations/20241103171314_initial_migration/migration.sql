-- CreateTable
CREATE TABLE `User` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `sexo` CHAR(10) NOT NULL,
    `idade` INTEGER NOT NULL,
    `cpf` CHAR(11) NOT NULL,
    `data_nascimento` DATETIME NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
