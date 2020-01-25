const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');

const nexmo = new Nexmo({
    apiKey: 'bc2d3f52',
    apiSecret: '6CQhof5GkF9sxg5Y'
}, { debug: true });

const app = express();

app.set('view engine', 'html');
app.engine('html', ejs.renderFile);

// app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

nexmo.message.sendSms(
    '12034848525', '0777484383', 'Hello Kaveen Chandika',{ type: 'unicode' },
    (err, responData) => {
        if (err) {
            console.log(err);
        }else{
            console.log(responData);
        }
    }
);

app.listen(4000, () => {
    console.log('Server Listening port 4000');
})
