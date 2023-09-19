import { Server as NetServerX } from 'http';
import { Server as ServerIO } from 'socket.io';
import { Server as NetServer, Socket } from 'net';
import { NextApiRequest, NextApiResponse } from 'next';

export type NextApiResponseServerIO = NextApiResponse & {
  socket: Socket & {
    server: NetServer & {
      io: ServerIO;
    };
  };
};

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async function socket(req: NextApiRequest, res: NextApiResponseServerIO) {
  if (!res.socket.server.io) {
    console.log('New Socket.io server...');
    // adapt Next's net Server to http Server
    const httpServer: NetServerX = res.socket.server as any;
    const io = new ServerIO(httpServer, {
      path: '/api/socket',
    });
    // append SocketIO server to Next.js socket server response
    res.socket.server.io = io;
  }

  console.log(req,res);
  // res.end();
};
