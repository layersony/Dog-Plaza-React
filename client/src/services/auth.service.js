import axios from "axios";


class AuthService {
  login(email, password) {
    return axios
      .post("/login", {
        email,
        password
      })
      .then(response => {
        if (response.data.jwt) {
          localStorage.setItem("user", JSON.stringify(response.data));
        }

        return response.data;
      });
  }

  logout() {
    localStorage.removeItem("user");
  }

  register(fullname, email, phonenumber, password) {
    return axios.post("/users", {
      fullname,
      email,
      password,
      phonenumber
    });
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));;
  }
}

export default new AuthService();