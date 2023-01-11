import { SubscribeMessage, WebSocketGateway, WebSocketServer } from '@nestjs/websockets';

@WebSocketGateway(8001, {cors : '*'})
// Here '*' is given for cors so that every frontend client to be connected with the gateway
// without this cors error will be thrown
export class CryptoGateway {
  @WebSocketServer()
  server;
// Creating an instance of a server
  @SubscribeMessage('message')
  handleMessage(client: any, payload: any): string {
    return 'Hello world!';
  }
}
