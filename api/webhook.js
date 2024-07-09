const twilio = require('twilio');
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = new twilio(accountSid, authToken);

module.exports = async (req, res) => {
  const { subject, body } = req.body;

  client.messages.create({
    body: `Subject: ${subject}\n\n${body}`,
    from: 'whatsapp:+14155238886',
    to: 'whatsapp:+919789758181'
  })
  .then(message => console.log(message.sid))
  .catch(error => console.error(error));

  res.status(200).send('Success');
};
