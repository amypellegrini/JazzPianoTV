export default function auth() {
  return {
    logged,
    logout() {
      return logged = false;
    },
    login() {
      return logged = true;
    }
  }
}