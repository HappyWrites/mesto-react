class Api {
  constructor(url, token) {
    this._url = url;
    this._token = token;
  }

  getInitialCards() {
    return fetch(this._url + '/cards', {      
      //mode: 'no-cors',
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._checkResult(res));
  }

  getUserInfo() {
    return fetch(this._url + '/users/me', {
      headers: {
        authorization: this._token
      }
    })
      .then(res => this._checkResult(res));
  }

transferUserInfo(input) {
  return fetch(this._url + '/users/me', {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: input.name,
      about: input.about
    }),
  })
    .then(res => this._checkResult(res));
}

addCard(input) {
  return fetch(this._url + '/cards', {
    method: 'POST',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      name: input.name,
      link: input.link
    })
  })
    .then(res => this._checkResult(res));
}

deleteCard(cardId) {
  return fetch(`${this._url}/cards/${cardId}`, {
    method: 'DELETE',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
    .then(res => this._checkResult(res));
}

addLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'PUT',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
    .then(res => this._checkResult(res));
}

deleteLike(cardId) {
  return fetch(`${this._url}/cards/${cardId}/likes`, {
    method: 'DELETE',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
  })
    .then(res => this._checkResult(res));
}

editAvatar(input) {
  return fetch(this._url + '/users/me/avatar', {
    method: 'PATCH',
    headers: {
      authorization: this._token,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      avatar: input.avatar
    }),
  })
    .then(res => this._checkResult(res));
}

_checkResult(res) {
  if (res.ok) {
    return res.json()
  } else {
    return Promise.reject(`Ошибка: ${res.status}`)
  }
}
}

const api = new Api('https://mesto.nomoreparties.co/v1/cohort-32', '0e36e0dc-917d-4b2c-8b4d-704f31f7e428');
export default api;
