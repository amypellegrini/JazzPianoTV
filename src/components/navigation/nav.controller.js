class NavController {
  constructor() {
    this.items = [
      { text: 'Home', state: 'home', href: '/home' },
      { text: 'Blog', href: '/blog' },
      { text: 'Exercises', href: '/exercises' },
      { text: 'Products', href: '/products' },
      { text: 'Login/Register', href: '/register-login' },
      { text: 'About', href: '/about' }
    ];
  }
}

angular
  .module('JazzPianoTV')
  .controller('NavController', NavController);
