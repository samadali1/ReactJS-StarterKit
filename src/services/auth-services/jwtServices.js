import axios from 'axios';

// function register(body) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post("YOUR_REGISTER_API_ROUTE", body)
//       .then((res) => {
//         resolve(res);
//       })
//       .catch((err) => {
//         if (err && err.response) {
//           reject(err.response);
//         }
//       });
//   });
// }

// function login(body) {
//   return new Promise((resolve, reject) => {
//     axios
//       .post("YOUR_LOGIN_API_ROUTE", body)
//       .then((res) => {
//         console.log(res, "=====LOGIN");
//         if (res && res.data && res.data.token) {
//           loginWithToken(res.data.token)
//             .then((res) => {
//               resolve(res);
//             })
//             .catch((err) => {
//               if (err && err.response) {
//                 reject(err.response);
//               }
//             });
//         } else {
//           reject(res.data.message);
//         }
//       })
//       .catch((err) => {
//         if (err && err.response) {
//           console.log(err.response, "=====LOGIN");
//           reject(err.response);
//         }
//       });
//   });
// }

// function loginWithToken(token) {
//   return new Promise((resolve, reject) => {
//     axios
//       .get("YOUR_LOGIN_WITH_TOKEN_API_ROUTE", {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       })
//       .then((res) => {
//         setSession(res.data.token);
//         resolve(res.data);
//       })
//       .catch((err) => {
//         if (err && err.response) {
//           reject(err.response);
//         }
//       });
//   });
// }

function setSession(accessToken) {
  if (accessToken) {
    localStorage.setItem('jwt_access_token', accessToken);
    axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
  } else {
    localStorage.removeItem('jwt_access_token');
    delete axios.defaults.headers.common.Authorization;
  }
}

function logout() {
  setSession(null);
}

function getAccessToken() {
  return window.localStorage.getItem('jwt_access_token');
}

export {
  // register,
  // login,
  // loginWithToken,
  logout,
  getAccessToken
};
