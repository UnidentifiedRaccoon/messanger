type WebsocketPayload = {
  token: string,
  userId: number,
  chatId: number,
  unread: number
};

class MessagesSocket {
  private socket: WebSocket;
  private listeners: Function[] = [];
  private unread: number = 0;
  private interval: NodeJS.Timer;
  constructor({
    token, userId, chatId, unread,
  }: WebsocketPayload) {
    this.unread = unread;
    this.socket = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${userId}/${chatId}/${token}`);

    this.socket.addEventListener('open', () => {
      // eslint-disable-next-line no-console
      console.log('Соединение установлено');
      this.getUnread();
    });

    this.interval = setInterval(() => {
      this.socket.send(JSON.stringify({
        type: 'ping',
      }));
    }, 10000);

    this.socket.addEventListener('message', (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type !== 'pong') {
          this.listeners.forEach((cb) => cb(data));
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }
    });

    this.socket.addEventListener('close', (event) => {
      clearInterval(this.interval);
      if (event.wasClean) {
        // eslint-disable-next-line no-console
        console.log('Соединение закрыто чисто');
      } else {
        // eslint-disable-next-line no-console
        console.log('Обрыв соединения');
      }
      // eslint-disable-next-line no-console
      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    this.socket.addEventListener('error', (event: any) => {
      // eslint-disable-next-line no-console
      console.log('Ошибка', event.message);
    });
  }

  async getUnread() {
    let gottenCount = 0;
    while (gottenCount < this.unread + 1) {
      this.socket.send(JSON.stringify({
        content: gottenCount.toString(),
        type: 'get old',
      }));
      gottenCount += 20;
    }
  }

  onMessage(cb: Function) {
    this.listeners.push(cb);
  }

  close() {
    this.socket.close();
  }

  sendMessage(message: string) {
    this.socket.send(JSON.stringify({
      content: message,
      type: 'message',
    }));
  }
}

export default MessagesSocket;
