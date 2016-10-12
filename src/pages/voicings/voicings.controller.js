class VoicingsController {
  constructor() {
    let rootUrl = 'https://s3.amazonaws.com/jazzpiano.tv/audio/';

    this.settings = {
      title: 'Voicings',
      sounds: { 
        bass: {
          src: [
            rootUrl + 'raw/20161003/ZOOM0001.ogg',
            rootUrl + 'raw/20161003/ZOOM0001.mp3',
            rootUrl + 'raw/20161003/ZOOM0001.WAV'
          ],
          sprite: {
            C: [ 0, 1000 ],
            F: [ 1000, 2000 ],
            Bb: [ 2000, 3000 ],
            Eb: [ 3000, 4000 ],
            Ab: [ 4000, 5000 ],
            Db: [ 5000, 6000 ],
            Gb: [ 6000, 7000 ],
            B: [ 7000, 8000 ],
            E: [ 8000, 9000 ],
            A: [ 9000, 10000 ],
            D: [ 10000, 11000 ]
          }
        },
        drums: {
          src: [ rootUrl + 'raw/20161012/ZOOM0003.WAV' ],
          sprite: {
            intro: [ 0, 1000 ],
            drumLoop: [ 1000, 2000 ],
            end: [ 3000, 4000 ]
          }
        }
      }
    };
  }
}

angular
  .module('JazzPianoTV')
  .controller('VoicingsController', VoicingsController);