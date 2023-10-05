-- CreateEnum
CREATE TYPE "TipoCosto" AS ENUM ('KG', 'G', 'UNIDAD', 'LATA');

-- AlterTable
ALTER TABLE "Registro" ADD COLUMN     "tipoCosto" "TipoCosto" NOT NULL DEFAULT 'KG';
