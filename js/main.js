define(['views/contact-view'], function(ContactView) {
  var JazzApp = {};

  JazzApp.contactView = new ContactView({
    ui: {
      contactBtn: $('.contact-btn'),
      contactForm: $('#contact'),
      contactSendBtn: $('#contactSend')
    }
  });
});
