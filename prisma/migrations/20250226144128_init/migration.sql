-- CreateEnum
CREATE TYPE "StatusCarrinho" AS ENUM ('ABERTO', 'FINALIZADO');

-- CreateTable
CREATE TABLE "Produto" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,
    "foto" TEXT NOT NULL,
    "categoriaId" INTEGER NOT NULL,
    "preco" DOUBLE PRECISION NOT NULL,
    "estrelas" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Produto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" SERIAL NOT NULL,
    "nome" TEXT NOT NULL,

    CONSTRAINT "Categoria_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Carrinho" (
    "id" SERIAL NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    "total" DOUBLE PRECISION NOT NULL,
    "status" "StatusCarrinho" NOT NULL,

    CONSTRAINT "Carrinho_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "CarrinhoProduto" (
    "id" SERIAL NOT NULL,
    "produtoId" INTEGER NOT NULL,
    "carrinhoId" INTEGER NOT NULL,
    "quantidade" INTEGER NOT NULL,

    CONSTRAINT "CarrinhoProduto_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CarrinhoToCarrinhoProduto" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_CarrinhoToCarrinhoProduto_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_CarrinhoToCarrinhoProduto_B_index" ON "_CarrinhoToCarrinhoProduto"("B");

-- AddForeignKey
ALTER TABLE "Produto" ADD CONSTRAINT "Produto_categoriaId_fkey" FOREIGN KEY ("categoriaId") REFERENCES "Categoria"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "CarrinhoProduto" ADD CONSTRAINT "CarrinhoProduto_produtoId_fkey" FOREIGN KEY ("produtoId") REFERENCES "Produto"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToCarrinhoProduto" ADD CONSTRAINT "_CarrinhoToCarrinhoProduto_A_fkey" FOREIGN KEY ("A") REFERENCES "Carrinho"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CarrinhoToCarrinhoProduto" ADD CONSTRAINT "_CarrinhoToCarrinhoProduto_B_fkey" FOREIGN KEY ("B") REFERENCES "CarrinhoProduto"("id") ON DELETE CASCADE ON UPDATE CASCADE;
