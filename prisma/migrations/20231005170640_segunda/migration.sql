/*
  Warnings:

  - You are about to drop the column `tipoCosto` on the `Registro` table. All the data in the column will be lost.

*/
-- CreateEnum
CREATE TYPE "TipoCantidad" AS ENUM ('KG', 'G', 'UNIDAD', 'LATA');

-- AlterTable
ALTER TABLE "Registro" DROP COLUMN "tipoCosto",
ADD COLUMN     "tipoCantidad" "TipoCantidad" NOT NULL DEFAULT 'KG';

-- DropEnum
DROP TYPE "TipoCosto";
