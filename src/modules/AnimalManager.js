const remoteURL = "http://localhost:5002"

export default {
  get(id) {
    return fetch(`${remoteURL}/animals/${id}`).then(result => result.json())
  },
  getAll(placeholder) {
    return fetch(`${remoteURL}/${placeholder}`).then(result => result.json())
  }
}