(function() {
  var 
      // UI DOM refrerences
      contactBtn = $('#navContact'),
      contactForm = $('#contact'),
      contactSendBtn = $('#contactSend'),

      hideContactForm = function(ev) {
        if (!ev || ev && ev.target === ev.currentTarget) {
          ev.stopPropagation();
          contactForm.addClass('hidden');
        }
      },

      showContactForm = function() {
        contactForm.removeClass('hidden');
      };

  contactBtn.on('click', showContactForm);
  contactForm.on('click', hideContactForm);
}());
