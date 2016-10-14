angular
  .module('JazzPianoTV')
  .component('keys', {
    templateUrl: 'components/dropdowns/keys/keys.html',
    bindings: {
      currentKey: '='
    },
    controller: 'KeysDropdownController',
    controllerAs: 'dd'
  });
