var config = require('config');

var mailgun = require('mailgun-js')({
  apiKey: config.get('mailgun.apiKey'),
  domain: config.get('mailgun.domain')
});

module.exports = function (app) {

  app.post('/api/email', function(req, res) {

    var name  = req.body.name,
      email   = req.body.email,
      subject = req.body.subject,
      message = "From: " + name + " (" + email + ")<br />" +  req.body.message;

    var sender;
    if (name !== undefined) {
      sender = name + ' <' + email + '>';
    } else {
      sender = email;
    }

    var data = {
      from: sender,
      to: [ config.get('receiver') ],
      subject: subject,
      html: message
    };

    mailgun.messages().send(data, function (err, body) {
      if (err) {
        res.status(500).json(err);
      }
      else
        res.sendStatus(200);
    });
  });
};

