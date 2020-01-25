const nodemailer = require('nodemailer');
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors());

app.post('/payment', (req, res) => {
    console.log(req.body.payment.email);
});

console.log("Boni");


nodemailer.createTestAccount((err, account) => {
    let transporter = nodemailer.createTransport({
        service: 'gmail',
        port: '25',
        secure: false,
        auth: {
            user: 'bonionlinepharmacy@gmail.com',
            pass: 'onlinepharmacy123'
        },
        tls: {
            rejectUnauthorized: false
        }
    });
    // kavindugp
    // savidyadwijewickrama@gmail.com
    let mailOptions = {
        from: '"Online Pharmacy" <bonionlinepharmacy@gmail.com>',
        to: 'ckaveen17@gmail.com',
        subject: 'Payment Confirmation',
        text: 'Hello',
        html: '<b>Hello Kaveen, <br> Your Payment Is Already Done , Thank You For Stay With Us <br> Happy Poya Day!!!</b>'
    };
    // transporter.sendMail(mailOptions, (error, info) => {
    //     if (error) {
    //         return console.log(error);
    //     }
    //     console.log('Message sent: %s', info.messageId);
    //     console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    // });
})

// app.listen(4002, () => {
//     console.log('Server Listening port 4000');
// })

