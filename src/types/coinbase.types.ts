export interface FaucetConfig {
    walletId: string;
}

// types/api.types.ts
import { Request } from "express";

export interface AssetTransferRequest extends Request {
  body: {
    asset: string;
    data: {
      recipient: string;
      amount: number;
    };
  };
}

export interface FundWalletRequest extends Request {
  body: {
    asset: string;
    amount: number;
  };
}

// types/user.types.ts
export interface Wallet {
  id?: string;
  address?: string;
  usdBalance?: number;
  rewards?: {
    amount: number;
    lastUpdated: Date;
  };
  usdcBalance?: number; // This is added dynamically but not stored in DB
}

export interface Faucet {
  amount: number;
  lastRequested?: Date;
}

export interface User {
  id: string;
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
  wallet: Wallet;
  faucet: Faucet;
}

// This is for Prisma's return type
export interface PrismaUser {
  id: string;
  userId: string;
  name: string;
  email: string;
  imageUrl: string;
  wallet: Wallet | null;
  faucet: Faucet | null;
}