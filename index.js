const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const { MongoClient } = require('mongodb');
import { Amplify } from 'aws-amplify'
import awsconfig from './aws-exports'

Amplify.configure(awsconfig)

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, './')));

var client = null;

async function run(dateArg, timeArg, emailArg, commentArg, ipArg, ipsArg) {
    try {
        await client.connect();
        const db = client.db('artecnologia_db');
        const collection = db.collection('req_for_comments');
        const document = { 'date': dateArg, 'time': timeArg, 'email': emailArg, 'comment': commentArg, 'ip': ipArg, 'ips': ipsArg };
        console.log("Document to  insert: ", document);
        const result = await collection.insertOne(document);
        console.log('Successfully sent insertion of document with _id: ${result.insertedId}');
    } catch (error) {
        console.log('Failed to insert document: ${error}');
    } finally {
        await client.close();
        console.log('...Finnaly Disconnected from MongoDB.');
    }

    try { 
        const newComments = await API.graphql({ query: createComments, variables: { input: { "date": dateArg,
                                                                                             "time": timeArg,
                                                                                             "email": emailArg,
                                                                                             "comment": commentArg,
                                                                                             "ip": ipArg
                                                                                            }
                                                                                  }
                                              });
        console.log('Successfully sent insertion of GraphQL data.');
    } catch(error) {
        console.log('Failed to create Data: ${error}');
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
    const uri = 'mongodb://angelalm:1164Louder@ec2-34-207-118-114.compute-1.amazonaws.com:27017/artecnologia_db?retryWrites=true&w=majority';
    console.log('Connecting to MongoDB...');
    client = new MongoClient(uri);
    run(dateFormatted, timeFormatted, formData.email, formData.texto, remote_ip, forwarded_ips).catch(console.dir);
});

app.listen(3000, function() {
    console.log('Server is running on port 3000');
});
