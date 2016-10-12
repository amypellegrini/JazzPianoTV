class ExerciseController {
  /**
   * @param {Object} $scope
   * @constructor
   */
  constructor($scope, $rootScope) {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/assets/';

    this.settings = $scope.exercise.settings;
    this.$scope = $scope;
    this.score = 0;
    this.loading = true;
    this.score = 0;
    this.playbackStatus = 'stopped';

    this.soundsLoaded = {
      bass: false,
      drums: false
    };

    if (this.settings.sounds) {
      this.preloadSounds();
    }

    $rootScope.$on('$stateChangeStart', () => {
      this.unloadSounds();
    });
  }

  /**
   * On load sound handler.
   * @param {String} sound Sound/track key.
   */
  onLoadSound(sound) {
    this.soundsLoaded[sound] = true;

    if (this.soundsLoaded.bass && this.soundsLoaded.drums) {
      this.loading = false;
      this.$scope.$apply();
    }
  }

  /**
   * Start loading sounds immediately.
   */
  preloadSounds() {
    let self = this;

    this.track = {};

    for (let sound in this.settings.sounds) {
      this.track[sound] = new Howl({
        src: this.settings.sounds[sound].src,
        sprite: this.settings.sounds[sound].sprite,
        onload: () => {
          this.onLoadSound(sound);
        },
        onloaderror: (id, err) => {
          console.log('Cannot load sound: ', err, id);
        }
      });
    }
  }

  /**
   * This must happen when navigating out to avoid memory leaks.
   */
  unloadSounds() {
    this.track.drums.stop().unload();
    this.track.bass.stop().unload();
  }

  /**
   * Play intro to harmonic progression and chain to loop.
   */
  intro() {
    this.track.drums.once('end', () => {
      this.loop();
    })
    this.track.drums.play('intro');
  }

  /**
   * Play loop.
   */
  loop() {
    this.track.drums.play('drumLoop');
    this.track.bass.play('C');
  }

  coda() {

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
      this.intro();
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
