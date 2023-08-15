import { BASE_URL, MOVIES_URL, MOVIES_IMAGE_URL } from "./variables";

class Api {
  constructor(BASE_URL, MOVIES_URL, MOVIES_IMAGE_URL) {
    this._URL = BASE_URL;
    this._MOVIES_URL = MOVIES_URL;
    this._MOVIES_IMAGE_URL = MOVIES_IMAGE_URL;
  }

  _getToken() {
    const token = localStorage.getItem("jwt");
    return token;
  }

  _getHeaders() {
    return {
      "Content-Type": "application/json",
      authorization: this._getToken(),
    };
  }

  _getJson(res) {
    {
      if (res.ok) {
        return res.json();
      }
      return Promise.reject(`Ошибка: ${res.status} что то идет не по плану`);
    }
  }

  _request(url, options) {
    return fetch(url, options).then(this._getJson);
  }

  sendUser(data) {
    const promise = fetch(`${this._URL}/users/me`, {
      method: "PATCH",
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: data.name,
        email: data.email,
      }),
    });
    return promise.then(this._getJson);
  }

  getSavedMovies() {
    const promise = fetch(`${this._URL}/movies`, {
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  sendMovies(data, email) {
    const promise = fetch(`${this._URL}movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: `${this._MOVIES_IMAGE_URL}${data.image.url}`,
        trailerLink: data.trailerLink,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        thumbnail: `${this._MOVIES_URL}data.image.formats.thumbnail.url`,
        movieId: data.id,
        owner: email,
      }),
    });
    return promise.then(this._getJson);
  }

  deleteMovies(id) {
    const promise = fetch(`${this._URL}movies/${id}`, {
      method: "DELETE",
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }
}

const MainApi = new Api(BASE_URL, MOVIES_URL, MOVIES_IMAGE_URL);
export default MainApi;
