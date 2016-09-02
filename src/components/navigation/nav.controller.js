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
