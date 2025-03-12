import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import path from "path";

export async function registerRoutes(app: Express): Promise<Server> {
  // API routes would go here if needed
  // This is a static portfolio site so we don't need any API routes
  
  const httpServer = createServer(app);

  return httpServer;
}
