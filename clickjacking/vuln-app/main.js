const $loginBtn = document.querySelector(".login-btn");
const $logoutBtn = document.querySelector(".logout-btn");
const $userName = document.querySelector(".user-login");

const USER_KEY = 'user';

  $loginBtn.addEventListener("click", () => {
    alert('login!');
    logIn("Julia");
  })

  $logoutBtn.addEventListener("click", () => {
    logOut("Julia");
  })

const logIn = (userName) => {
  localStorage.setItem(USER_KEY, userName);
  $userName.textContent = localStorage.getItem(USER_KEY);
};
const logOut = () => {
  localStorage.removeItem(USER_KEY);
  $userName.textContent = "Annonymous";
};
