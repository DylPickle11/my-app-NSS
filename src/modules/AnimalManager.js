const remoteURL = "http://localhost:5002"

export default {
  get(placeholder, id) {
    return fetch(`${remoteURL}/${placeholder}/${id}`).then(result => result.json())
  },
  getAll(placeholder) {
    return fetch(`${remoteURL}/${placeholder}`).then(result => result.json())
  },
  delete(placeholder, id) {
    return fetch(`http://localhost:5002/${placeholder}/${id}`, {
        method: "DELETE"
    })
    .then(result => result.json())
  },
    post(newAnimal) {
      return fetch(`${remoteURL}/animals`, {
          method: "POST",
          headers: {
              "Content-Type": "application/json"
          },
          body: JSON.stringify(newAnimal)
      }).then(data => data.json())
  },
  update(placeholder, editedAnimal) {
    return fetch(`${remoteURL}/${placeholder}/${editedAnimal.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(editedAnimal)
    }).then(data => data.json());
  }
}
