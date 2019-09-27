function login(userEmail, userPassword) {

  console.log(userEmail);
  console.log(userPassword);


  console.log(localStorage.getItem('user'));

  // return fetch();

  localStorage.setItem('user', JSON.stringify({
    user: userEmail,
    password: userPassword,
    token: "1234567890abcdefghijk"
  }));
  console.log(localStorage.getItem('user'));



}

function logout() {

  localStorage.removeItem('user');

}

export const userService = {
  login,
  logout
}