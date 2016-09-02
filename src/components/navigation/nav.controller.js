class NavController {
  constructor() {
    this.items = [
      { text: 'Blog', href: '/blog' },
      { text: 'Login/Register', href: '/register-login' },
      { text: 'About', href: '/about' }
    ];
  }
}

angular
  .module('JazzPianoTV')
  .controller('NavController', NavController);

  // () => {
  //   var nav = this;

  //   // Navigation item placeholders harcoded for now (no need of API)
  //   nav.items = [
  //     { text: 'Blog', href: '/blog' },
  //     { login: 'Login', href: '/login' },
  //     { login: 'Register', href: '/register' }
  //   ];
  // }