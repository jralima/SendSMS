const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_TOKEN;

const client = require('twilio')(accountSid, authToken);

client.messages
    .create({
        to: '+55-NUMERO-DESTINO-AQUI',
        from: process.env.TWILIO_NUMBER,
        body: 'Texto da Msg',
    })
    .then(message => console.log(message))
    .catch(err => console.error(err));
