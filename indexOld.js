// Load required module
const express = require('express');
const WebSocket = require('ws');

// Initialize Express App
const app = express();

// Define static files location
app.use(express.static('public'));

// Initialize WebSocket Server
const wss = new WebSocket.Server({ port: 8080 });

// Define what happens when a client connects to the server
wss.on('connection', (ws) => {
    console.log('Client connected');

    // Send a welcome message to the connected client
    ws.send('Welcome! You are now connected to the server.');

    // Define what happens when a client sends a message to the server
    ws.on('message', (message) => {
        console.log(`Received message => ${message}`);

        // Send the received message back to the client
        ws.send(`You sent => ${message}`);
    });

    // Define what happens when a client closes the connection
    ws.on('close', () => {
        console.log('Client disconnected');
    });
});

// Start the Express Server
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});