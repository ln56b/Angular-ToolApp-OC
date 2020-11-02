export class AuthService {
  isAuth = false;

  signIn() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        this.isAuth = true;
        resolve(true);
      }, 2000);
    });
  }

  signOut() {
    alert("You have been signed out");
    this.isAuth = false;
  }
}
