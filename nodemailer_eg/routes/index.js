var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Test' });
});

router.post('/send',function(req,res,next){
  var transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
      user: 'email',
      pass: 'password'
    }
  })
  var mainOptions = {
     from: 'email',
     to: 'email',
     subject: 'Website Submission',
     text: 'You have new '+req.body.name+'Email'+req.body.email+'Message'+req.body.message

  };
  transporter.sendMail(mailOptions,function(error,info){
    if(error){
      console.log(error)
    }
  });
});


module.exports = router;
