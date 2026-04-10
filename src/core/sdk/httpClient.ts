export interface HttpRequestConfig extends RequestInit {
  retries?: number;
}

export class HttpError extends Error {
  status: number;

  constructor(message: string, status: number) {
    super(message);
    this.status = status;
  }
}

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function httpClient<T>(url: string, config: HttpRequestConfig = {}): Promise<T> {
  const { retries = 1, ...rest } = config;

  for (let attempt = 0; attempt <= retries; attempt++) {
    try {
      const response = await fetch(url, rest);
      if (!response.ok) {
        throw new HttpError(`Request failed: ${response.statusText}`, response.status);
      }
      return (await response.json()) as T;
    } catch (error) {
      if (attempt >= retries) throw error;
      await wait((attempt + 1) * 200);
    }
  }

  throw new Error('Unexpected request state');
}
