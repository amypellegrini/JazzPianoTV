angular
  .module('JazzPianoTV')
  .component('keys', {
    templateUrl: 'components/dropdowns/keys/keys.html',
    bindings: {
      disabled: '=',
      currentKey: '='
    },
    controller: 'KeysDropdownController',
    controllerAs: 'dd'
  });
