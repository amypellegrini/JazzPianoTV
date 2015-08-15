define([
  'views/contact-view',
  'views/exercises-demo-view'],
function(ContactView, DemoView) {
  var JazzApp = window.JazzApp = {},
      $el = $('.main'),
      $gameplay = $el.find('.gameplay-container');

  JazzApp.contactView = new ContactView({
    ui: {
      contactBtn: $el.find('.contact-btn'),
      contactForm: $el.find('#contact'),
      contactSendBtn: $el.find('#contactSend')
    }
  });

  if ($gameplay.length > 0) {
    JazzApp.demoView = new DemoView({
      el: $('.gameplay-container')
    });
  }
});
