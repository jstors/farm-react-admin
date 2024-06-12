export enum ResultEnum {
  SUCCESS = 0,
  ERROR = -1,
  TIMEOUT = 401,
  TYPE = 'success',
}

export function resultSuccess<T>(result: T, { message = 'ok' } = {}) {
  return {
    code: ResultEnum.SUCCESS,
    result,
    message,
    type: 'success',
  };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function resultPageSuccess<T = any>(page: number, pageSize: number, list: T[], { message = 'ok' } = {}) {
  const pageData = pagination(page, pageSize, list);

  return {
    ...resultSuccess({
      items: pageData,
      total: list.length,
    }),
    message,
  };
}

export function resultError(message = 'Request failed', { code = ResultEnum.ERROR, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error',
  };
}

// biome-ignore lint/suspicious/noExplicitAny: <explanation>
export function pagination<T = any>(pageNo: number, pageSize: number, array: T[]): T[] {
  const offset = (pageNo - 1) * Number(pageSize);
  return offset + Number(pageSize) >= array.length
    ? array.slice(offset, array.length)
    : array.slice(offset, offset + Number(pageSize));
}

export interface requestParams {
  method: string;
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  body: any;
  headers?: { authorization?: string };
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  query: any;
}

/**
 * @description 本函数用于从request数据中获取token，请根据项目的实际情况修改
 *
 */
export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization;
}
