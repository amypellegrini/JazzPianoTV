class ExerciseController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    this.score = 0;
    this.rhPath = 'https://s3-eu-west-1.amazonaws.com/jazzpianotv/assets/voicings/357-735-573/a-c-amaj7.svg';
    this.lhPath = "";
  }
}

angular
  .module('JazzPianoTV')
  .controller('ExerciseController', ExerciseController);
