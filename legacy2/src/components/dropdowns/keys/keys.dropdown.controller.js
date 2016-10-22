class KeysDropdownController {
  constructor() {
    this.keys = [
      'C',
      'F',
      'Bb',
      'Eb',
      'Ab',
      'Db',
      'Gb',
      'B',
      'E',
      'A',
      'D',
      'G'
    ]
  }
}

angular
  .module('JazzPianoTV')
  .controller('KeysDropdownController', KeysDropdownController);
