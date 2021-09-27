const QR_REST_API = "http://localhost:8080/api/qrs";

class APIService {
  getUsers() {
    return fetch(USERS_REST_API, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    }).then((res) => res.json());
  }

  getProducts() {
    return fetch(PRODUCTS_REST_API, {
      method: "get",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      credentials: "same-origin",
    }).then((res) => res.json());
  }
}

export default new APIService();
