(function() {
  var 
      // UI DOM refrerences
      contactBtn = $('.contact-btn'),
      contactForm = $('#contact'),
      contactSendBtn = $('#contactSend'),

      hideContactForm = function(ev) {
        if (!ev || ev && ev.target === ev.currentTarget) {
          contactForm.addClass('visuallyhidden');
        }
      },

      showContactForm = function() {
        contactForm.removeClass('visuallyhidden');
      };

  contactBtn.on('click', showContactForm);
  contactForm.on('click', hideContactForm);
  contactForm.find('form').parsley();
}());
