import { MOVIES_URL } from "./variables";

class MoviesApi {
  constructor(URL) {
    this._URL = URL;
  }

  _getJson(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} что то идет не по плану`);
    }
  }

  getMovies() {
    const promise = fetch(this._URL);
    return promise.then(this._getJson);
  }
}

const moviesApi = new MoviesApi(MOVIES_URL);
export default moviesApi;
