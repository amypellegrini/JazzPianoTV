class NavController {
  constructor() {
    this.items = [
      { text: 'Home', href: '/home' },
      { text: 'Dashboard', href: '/dashboard' },
      { text: 'Videos', href: '/videos' },
      { text: 'Blog', href: '/blog' },
      { text: 'Exercises', href: '/exercises' },
      { text: 'Products', href: '/products' },
      { text: 'About', href: '/about' },
      { text: 'Login/Register', href: '/register-login' }
    ];
  }
}

angular
  .module('JazzPianoTV')
  .controller('NavController', NavController);
