export class Fetcher {
  private _url: string;
  private _headers: Headers = new Headers({
    "Content-Type": "application/json",
  });

  /**
   * Constructor
   * @param url {string} - The url of the API
   */
  constructor(url: string) {
    this._url = url;
  }

  public setBearerToken(token: string) {
    this._headers.append("Authorization", `Bearer ${token}`);
  }

  /**
   * Get data from api
   * @param path {string} - The path of the API
   * @returns Json Object of the API
   */
  public async get<T>(path: string): Promise<T> {
    const response = await fetch(`${this._url}/${path}`, {
      headers: this._headers,
    });

    return await response.json();
  }

  /**
   * Post method to send data to the API
   * @param path {string} - The path of the API
   * @param body {object} - The body of the request
   * @returns Response of the API
   */
  public async post<T, BodyArguments>(
    path: string,
    body: BodyArguments
  ): Promise<T> {
    const response = await fetch(`${this._url}/${path}`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify(body),
    });

    if (response.status !== 200) {
      throw new Error(response.statusText);
    }

    return await response.json();
  }
}
