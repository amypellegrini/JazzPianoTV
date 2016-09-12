class KeyboardController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    this.octaves = $scope.octaves;
  }

  /**
   * Play a sequence.
   * @param {Array} sequence
   */
  playSequence(sequence) {

  }

  stopSequence() {

  }

  setActiveNotes() {

  }
}

angular
  .module('JazzPianoTV')
  .controller('KeyboardController', KeyboardController);
