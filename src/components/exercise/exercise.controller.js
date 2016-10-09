class ExerciseController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/assets/';

    this.settings = $scope.exercise.settings;

    this.score = 0;

    console.log($scope);

  }
}

angular
  .module('JazzPianoTV')
  .controller('ExerciseController', ExerciseController);
