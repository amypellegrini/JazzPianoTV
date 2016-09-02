class NavController {
  constructor() {
    this.items = [
      { text: 'Blog', href: '/blog' },
      { text: 'Login', href: '/login' },
      { text: 'Register', href: '/register' }
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