const URL = "https://api.korchinmovies.nomoreparties.sbs/";
const MOVIES_URL = "https://api.nomoreparties.co/beatfilm-movies";

class Api {
  constructor(URL, MOVIES_URL) {
    this._URL = URL;
    this._MOVIES_URL = MOVIES_URL;
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
    const promise = fetch(`${this._URL}users/me`, {
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
    const promise = fetch(`${this._URL}movies`, {
      headers: this._getHeaders(),
    });
    return promise.then(this._getJson);
  }

  sendMovies(data) {
    const promise = fetch(`${this._URL}movies`, {
      method: "POST",
      headers: this._getHeaders(),
      body: JSON.stringify({
        country: data.country,
        director: data.director,
        duration: data.duration,
        year: data.year,
        description: data.description,
        image: data.image,
        trailerLink: data.trailerLink,
        nameEN: data.nameEN,
        nameRU: data.nameRU,
        thumbnail: data.thumbnail,
        movieId: data.id,
        owner: data.owner,
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

const MainApi = new Api(URL, MOVIES_URL);
export default MainApi;
