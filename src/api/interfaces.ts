// src/api/interfaces.ts
import { Server } from 'http';

export interface API {
  createServer(): Server;
}