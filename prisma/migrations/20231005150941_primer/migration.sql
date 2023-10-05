-- CreateTable
CREATE TABLE "Cliente" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Cliente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Producto" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Producto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Registro" (
    "id" SERIAL NOT NULL,
    "fecha" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "costo" INTEGER NOT NULL,
    "cantidad" TEXT NOT NULL,
    "idProducto" INTEGER NOT NULL,
    "idCliente" INTEGER NOT NULL,

    CONSTRAINT "Registro_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cliente_nombre_key" ON "Cliente"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Producto_nombre_key" ON "Producto"("nombre");

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idProducto_fkey" FOREIGN KEY ("idProducto") REFERENCES "Producto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Registro" ADD CONSTRAINT "Registro_idCliente_fkey" FOREIGN KEY ("idCliente") REFERENCES "Cliente"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
