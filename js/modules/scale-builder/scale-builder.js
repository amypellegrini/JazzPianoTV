(function() {
  var ScaleBuilder = window.ScaleBuilder = function(el) {
    var
        $el = $(el),
        $keys = $el.find('.keys-list-container'),
        $scaleTypes = $el.find('.scale-types-list-container'),
        scale = {};

    $scaleTypes.on('click', function(ev) {
      console.log(ev);
    });

    return scale;
  }

  return new ScaleBuilder($('.scale-builder'));
})();
