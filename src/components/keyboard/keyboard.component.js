angular
  .module('JazzPianoTV')
  .component('keyboard', {
    controller: 'KeyboardController',
    scope: {
      octaves: '='
    }
  });
