const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const nodemailer = require('nodemailer');
const { MongoClient } = require('mongodb');

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

function sendMail(to, subject, text) {
    let transporter = nodemailer.createTransport({
        host: 'email-smtp.us-east-1.amazonaws.com',
        port: 587,
        secure: false,
        auth: {
            user: 'angela.l.m@aixkare.com', // replace with your email
            pass: '1164Louder!#' // replace with your email password
        },
        tls: {
            rejectUnauthorized: false
        }
    });

    // setup email data with unicode symbols
    let mailOptions = {
        from: '"AixKare" <angela.l.m@aixkare.com>',
        to: to, // list of receivers
        subject: subject, // Subject line
        text: text, // plain text body
    };

    // send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
    });
}

app.post('/contact_form', (req, res) => {
    const formData = req.body;
    const remote_ip = req.ip;
    const forwarded_ips = req.ips;
    let currentDate = new Date();
    let dateFormatted = currentDate.getFullYear() + "/" + (currentDate.getMonth() + 1) + "/" + currentDate.getDate();
    let timeFormatted = currentDate.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit'});
    console.log('Date: ', dateFormatted);
    console.log('Time: ', timeFormatted);
    console.log('Forwarded array of IPs: ');
    for(ips in req.ips) {
    console.log(ips, '\n');
    }
    console.log('Form data received at: (',dateFormatted,' ',timeFormatted,') in JSON format:', formData);

    sendMail('angelakimichellle@hotmail.com', 'logging', 'About to get comment...');
    var client = MongoClient.connect(
        'mongodb://angelalm:1164Louder@docdb-aixkare2.czszlu5pf7si.us-east-1.docdb.amazonaws.com:27017/artecnologia_db?tls=true&replicaSet=rs0&readPreference=secondaryPreferred&retryWrites=false',
        {
          tlsCAFile: 'global-bundle.pem'
        },
        function(err, client) {
            if(err)
                throw err;
            db = client.db('artecnologia_db');
            col = db.collection('req_for_comments');
            col.insertOne({'date': dateFormatted, 'time': timeFormatted, 'email': formData.email, 'comment': formData.texto, 'ip': remote_ip, 'ips': forwarded_ips}, function(err, result) {
                console.log(result);
                sendMail('angelakimichellle@hotmail.com', 'logging', result);
                sendMail('angelakimichellle@hotmail.com', 'logging', err);
                client.close();
           });
        });
        sendMail('angelakimichellle@hotmail.com', 'logging', 'Finished getting comment...');
    res.redirect('index.html');
    });

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
