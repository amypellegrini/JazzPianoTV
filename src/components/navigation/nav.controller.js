class NavController {
  constructor() {
    this.items = [
      { text: 'Home', href: '/home' },
      { text: 'Dashboard', href: '/dashboard' },
      { text: 'Videos', href: '/videos' },
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
