class KeyboardController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    this.octaves = $scope.octaves;
  }
}

angular
  .module('JazzPianoTV')
  .controller('KeyboardController', KeyboardController);
