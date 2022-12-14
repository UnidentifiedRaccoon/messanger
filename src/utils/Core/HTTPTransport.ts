enum METHODS {
  GET = 'GET',
  PUT = 'PUT',
  POST = 'POST',
  DELETE = 'DELETE',
}

type RequestBody = Document | XMLHttpRequestBodyInit;
type Options = {
  method?: METHODS,
  data?: RequestBody,
  headers?: Record<string, string>,
  timeout?: number
  tries?: number
};

function setHeaders(xhr: XMLHttpRequest, headers: Record<string, string>): void {
  if (!headers) return;
  Object.entries(headers).forEach(([key, val]) => xhr.setRequestHeader(key, val));
}

type HTTPMethod = (url: string, options: Partial<Options>) => Promise<XMLHttpRequest>;

export default class HTTPTransport {
  private baseUrl: string;
  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  get: HTTPMethod = (url, options) => {
    const query = options.data && typeof options.data === 'string' ? options.data : '';
    return this.request(`${this.baseUrl + url}?${query}`, { ...options, method: METHODS.GET }, options.timeout);
  };

  put: HTTPMethod = (url, options) => this
    .request(this.baseUrl + url, { ...options, method: METHODS.PUT }, options.timeout);

  post: HTTPMethod = (url, options) => this
    .request(this.baseUrl + url, { ...options, method: METHODS.POST }, options.timeout);

  delete: HTTPMethod = (url, options) => this
    .request(this.baseUrl + url, { ...options, method: METHODS.DELETE }, options.timeout);

  request = (url: string, options: Options, timeout = 5000): Promise<XMLHttpRequest> => {
    const { method, data, headers } = options;
    if (!method) throw new Error('request without method');
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open(method, url);
      xhr.withCredentials = true;
      if (headers) {
        setHeaders(xhr, headers);
      }

      xhr.onload = () => resolve(xhr);

      xhr.onabort = reject;
      xhr.onerror = reject;
      xhr.ontimeout = reject;
      xhr.timeout = timeout;

      switch (method) {
        case METHODS.GET: xhr.send(); break;
        default: xhr.send(data);
      }
    });
  };
}

export function fetchWithRetry(request: Promise<XMLHttpRequest>, options: Options) {
  let { tries = 1 } = options;
  const initialTries = tries;
  function onError(): Promise<XMLHttpRequest> {
    if (tries > 0) {
      tries -= 1;
      return request.catch(onError);
    } throw new Error(`Request failed after ${initialTries} tries`);
  }
  return request.catch(onError);
}
