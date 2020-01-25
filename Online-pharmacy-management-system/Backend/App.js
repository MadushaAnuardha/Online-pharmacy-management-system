const express = require('express');
const bodyParser = require('body-parser');
const ejs = require('ejs');
const Nexmo = require('nexmo');
const socketio = require('socket.io');
const cors = require('cors');
const mysql = require('mysql');






const app = express();

app.set('view engine','html');
app.engine('html',ejs.renderFile);

app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}))


const result = "select * from drug";

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'hostpital'
});

connection.connect(err => {
    if (err) {
        return err;
    }
});

app.use(cors());
app.get('/', (req, res) => {
    res.send('go to /users to see past users');
})

app.get('/users', (req, res) => {
    connection.query(result, (err, results) => {
        //    if(err){
        //        return res.send(err);
        //    }else{
        //       return res.json({
        //           data: results
        //       })
        //    }
        // console.log(results.u_id);
        // response = {
        //    uname : results.username,
        //    pass :  results.password
        // }
        res.send(JSON.stringify(results));
    });
});

app.post('/',(req,res) => {
    res.send(req.body);
    console.log(res.body.fname);
})

app.listen(4002, () => {
    console.log('Server Listrning on port 4000')
})