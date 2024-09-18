-- CreateTable
CREATE TABLE "CryptoAddress" (
    "id" SERIAL NOT NULL,
    "address" TEXT,
    "type" TEXT,
    "valid" BOOLEAN DEFAULT false,
    "donationTimestamp" TIMESTAMP(3),
    "donationAmount" DOUBLE PRECISION,
    "transactionHash" TEXT,
    "questionsAsked" INTEGER DEFAULT 0,

    CONSTRAINT "CryptoAddress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Image" (
    "id" SERIAL NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Image_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "CryptoAddress_address_key" ON "CryptoAddress"("address");
