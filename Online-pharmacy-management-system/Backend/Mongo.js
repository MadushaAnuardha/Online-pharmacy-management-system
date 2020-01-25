var mongoose = require("mongoose");
const nodemailer = require('nodemailer');
var Schema = mongoose.Schema;
const cors = require('cors');
const bodyParser = require('body-parser');
const express = require('express');
// var paymentController = require('../Backend/Mail');

const app = express();
app.use(bodyParser.json());
app.use(cors());

mongoose.connect('mongodb://madusha123:it16121584@ds113873.mlab.com:13873/pharmacy', function (err) {
  if (err) {
    console.log(err);
    process.exit(-1);
  }
  console.log("Connected to the DB");
});




//drug find print to console.
// drugs.find({}, function (err, docs) {
//   console.log(docs);
// })

//get all drug details
app.get('/users/', (req, res) => {
  drugs.find({}, function (err, docs) {
    res.send(docs);
  })

});


//get drug details relate drug Name
app.get('/users2/:drugName', (req, res) => {
  var drugName = req.params.drugName;
  var query = { drug_name: drugName };
  drugs.find((query), function (err, docs) {
    res.send(docs);
  })
});


//payment insert
app.post('/payment', (req, res) => {
  const paymentSchema = new Schema(
    {
      name: String,
      email: String,
      cardNo: String,
      contact: String,
      payamount: Number,
      csv:Number
    }
  );

  var Payment = mongoose.model('payment', paymentSchema);
  var inserQuery = new Payment(
    {
      name: req.body.payment.name,
      email: req.body.payment.email,
      cardNo: req.body.payment.cardNo,
      contact: req.body.payment.contact,
      payamount: req.body.payment.payAmount,
      csv:req.body.payment.cvcno
    }
  );

  inserQuery.save(function (err) {
    if (err) return console.log(err);
    console.log("1 Document Inserted Success");
  });

  //Get submit data for email use
  var Name = req.body.payment.name;
  var Email = req.body.payment.email



  //Send Email Code
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
    let mailOptions = {
      from: '"Online Pharmacy" <bonionlinepharmacy@gmail.com>',
      to: Email,
      subject: 'Payment Confirmation',
      text: 'Hello',
      html: '<b>Hello ' + Name + ', <br> Your Have Successfully done the purchasing , Thank You For using Online Pharmacy </b>'
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        return console.log(error);
      }
      console.log('Message sent: %s', info.messageId);
      console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
    });
  })
});

//////////////////////////////////////////////////
app.post('/getdata', (req,res) => {

  var Users = mongoose.model('users',userSchema);
  var insertUsers = new Users({

     fName:req.body.fName_data,
     lName: req.body.lName_data,
     phone: req.body.phone_data,
     email: req.body.email_data,
     nic: req.body.nic_data,
     address: req.body.address_data,
     userName : req.body.uName_data,
     password: req.body.password_data

  })
  // console.log("backend "+fName)
  console.log("backend "+insertUsers)

  //Insert User data
  insertUsers.save(function (err){
    if(err) return console.log(err);
    console.log("data inserted");
  });
});

//drug Schema
var drugsSchema = new Schema();
var drugs = mongoose.model('drugs',drugsSchema);

//get drug data

app.get('/test', (req,res) => {
    drugs.find({},function(err,docs){
      res.send(docs);
    })
});
///////////////////////////////////////////////////////////

//payment Find
// Payment.find({}, function (err, docs) {
//   console.log(docs);
// })


app.listen(4002, () => {
  console.log('Server Listrning on port 4002')
})
