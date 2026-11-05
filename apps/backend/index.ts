import express from 'express'
import { createServer } from "http";
import { WebSocketServer } from "ws";
import { Server as HttpServer } from "http";





class Server {
    app: express.Express;
    server: HttpServer;
    socket: WebSocketServer;

    constructor() {
         this.app=express();
      this.server = createServer(this.app);
      this.socket = new WebSocketServer({server: this.server });

}}

