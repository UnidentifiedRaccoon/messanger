import HTTPTransport from '../Core/HTTPTransport';

function transportCreator(url: string) {
  return class extends HTTPTransport {
    constructor(endpoint: string) {
      super(`${url}${endpoint}`);
    }
  };
}

const YandexTransport = transportCreator('https://ya-praktikum.tech/api/v2');
export default YandexTransport;
