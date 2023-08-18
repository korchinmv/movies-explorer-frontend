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
      console.log(`Ошибка: код ${res.status}`);
      return res.text().then((text) => {
        let errorText = JSON.parse(text);
        return Promise.reject(errorText.message);
      });
    }
  }

  getMovies() {
    const promise = fetch(this._URL);
    return promise.then(this._getJson);
  }
}

const moviesApi = new MoviesApi(MOVIES_URL);
export default moviesApi;
