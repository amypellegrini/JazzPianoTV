class NavController {
  constructor() {
    this.items = [
      { text: 'Home', enabled: true, href: '/' },
      { text: 'Dashboard', enabled: false, href: '/dashboard' },
      { text: 'Videos', enabled: true, href: '/videos' },
      { text: 'Blog', enabled: true, href: '/blog' },
      { text: 'Exercises', enabled: true, href: '/exercises' },
      { text: 'Products', enabled: true, href: '/products' },
      { text: 'About', enabled: true, href: '/about' },
      { text: 'Login/Register', enabled: true, }
    ];
  }
}

angular
  .module('JazzPianoTV')
  .controller('NavController', NavController);