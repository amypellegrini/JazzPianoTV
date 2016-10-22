class VoicingsController {
  constructor() {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/audio/';

    this.settings = {
      title: 'Voicings',
      sounds: { 
        bass: {
          src: [
            rootUrl + 'tracks/60bpm-bass-whole-ii-V-I.mp3',
            rootUrl + 'tracks/60bpm-bass-whole-ii-V-I.ogg',
            rootUrl + 'tracks/60bpm-bass-whole-ii-V-I.wav'
          ],
          sprite: {
            C: [ 0, 48000, true ],
            F: [ 66500, 80000, true ],
            Bb: [ 2000, 3000, true ],
            Eb: [ 3000, 4000, true ],
            Ab: [ 4000, 5000, true ],
            Db: [ 5000, 6000, true ],
            Gb: [ 6000, 7000, true ],
            B: [ 7000, 8000, true ],
            E: [ 8000, 9000, true ],
            A: [ 9000, 10000, true ],
            D: [ 10000, 11000, true ]
          }
        },
        drums: {
          src: [
            rootUrl + 'tracks/60bpm-drums-ride-swing.mp3',
            rootUrl + 'tracks/60bpm-drums-ride-swing.ogg',
            rootUrl + 'tracks/60bpm-drums-ride-swing.wav'
          ],
          sprite: {
            intro: [ 0, 4000 ],
            drumLoop: [ 8000, 12000, true ],
            end: [ 28000, 29000 ]
          }
        }
      }
    };
  }
}

angular
  .module('JazzPianoTV')
  .controller('VoicingsController', VoicingsController);