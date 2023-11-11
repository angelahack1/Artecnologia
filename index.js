const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const http = require('http');
const { MongoClient } = require('mongodb');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

async function run(date_arg, time_arg, mail_arg, comment_arg, ip_arg, forwarded_ips) {
    const url ='mongodb://angelalm:1164Louder@docdb-aixkare2.czszlu5pf7si.us-east-1.docdb.amazonaws.com:27017/?tls=true&tlsCAFile=global-bundle.pem&retryWrites=false'
    const dbName = 'artecnologia_db';
    const client = new MongoClient(url);
    const db = client.db(dbName);
    const collection = db.collection('req_for_comments');
    try {
    await client.connect();
    const db = client.db(dbName);
    const r = await collection.insertOne({ date: date_arg, time: time_arg, email: mail_arg, comment: comment_arg, ip: ip_arg, ips: forwarded_ips });
    console.log(r.insertedId);
    await client.close();
    } catch (error) {
    console.error('Error running script:', error);
    }
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
    run(dateFormatted, timeFormatted, formData.email, formData.texto, remote_ip, forwarded_ips).catch(console.dir);
    res.redirect('index.html');
    });
    

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
