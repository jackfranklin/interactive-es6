import chokidarEvEmitter from 'chokidar-socket-emitter';
import httpServer from 'http-server';

const server = httpServer.createServer({
  root: '.',
  robots: true,
  headers: {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Credentials': 'true'
  }
})

chokidarEvEmitter({ app: server.server });

server.listen(8090);

console.log('Listening on 8090');
