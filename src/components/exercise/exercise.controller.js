class ExerciseController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope) {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/assets/';

    this.settings = $scope.exercise.settings;

    this.score = 0;
    this.playbackStatus = 'stopped';
    this.soundsLoaded = {
      bass: false,
      drums: false
    };

    if (this.settings.sounds) {
      this.preloadSounds();
    }
  }

  preloadSounds() {
    let self = this;

    this.track = {};

    for (let sound in this.settings.sounds) {
      this.track[sound] = new Howl({
        src: this.settings.sounds[sound].src,
        onload: function() {
          console.log('Loaded!');
          self.soundsLoaded[sound] = true;
        },
        onloaderror: function(id, err) {
          console.log('Cannot load sound: ', err, id);
        }
      });
    }
  }

  /**
   * This must happen when navigating out to avoid memory leaks.
   */
  unloadSounds() {

  }

  /**
   * Play exercise handler.
   */
  play() {
    if (!this.soundsLoaded.bass || !this.soundsLoaded.drums) {
      console.log('Sounds not loaded: ', this.soundsLoaded);
      return;
    }

    if (this.playbackStatus !== 'playing') {
      this.playbackStatus = 'playing';
      this.track.bass.play();
      this.track.drums.play();
    }
  }

  /**
   * Pause exercise handler.
   */
  pause() {
    if (this.playbackStatus !== 'paused') {
      this.track.bass.pause();
      this.track.drums.pause();
      this.playbackStatus = 'paused';
    }
  }

  /**
   * Stop exercise handler.
   */
  stop() {
    if (this.playbackStatus !== 'stopped') {
      this.track.bass.stop();
      this.track.drums.stop();
      this.playbackStatus = 'stopped';
    }
  }
}

angular
  .module('JazzPianoTV')
  .controller('ExerciseController', ExerciseController);
