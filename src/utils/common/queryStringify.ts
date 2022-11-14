type StringIndexed = Record<string, any>;

type PlainObject<T = unknown> = {
  [k in string]: T;
};

function isPlainObject(value: unknown): value is PlainObject {
  return typeof value === 'object'
    && value !== null
    && value.constructor === Object
    && Object.prototype.toString.call(value) === '[object Object]';
}

function queryStringify(data: any): string | never {
  if (typeof data !== 'object') throw new Error('input must be an object');
  function innerQuery(obj: StringIndexed): string[] {
    const result = [];
    // eslint-disable-next-line no-restricted-syntax
    for (const [key, value] of Object.entries(obj)) {
      if (Array.isArray(value)) {
        result.push(
          ...innerQuery(Object.fromEntries(value))
            .map((x: any) => `${key}=${x}`),
        );
      } else if (isPlainObject(value)) {
        const arr = innerQuery(value);
        arr.forEach((x) => {
          result.push(`${key}=${x}`);
        });
      } else if (typeof value === 'string') {
        if (value.toString().trim().length > 0) result.push(`${key}=${value}`);
      } else {
        result.push(`${key}=${value}`);
      }
    }
    return result;
  }

  const formattedResult = innerQuery(data);
  for (let i = 0; i < formattedResult.length; i += 1) {
    const query = formattedResult[i];
    if (query.split('=').length > 2) {
      const separatedQuery = query.split('=');
      const arr = separatedQuery.slice(1, separatedQuery.length - 1).map((x: any) => `[${x}]`).join('');
      formattedResult[i] = `${separatedQuery[0]}${arr}=${separatedQuery.pop()}`;
    }
  }
  return formattedResult.join('&');
}
export default queryStringify;
