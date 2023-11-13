import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, './')));

app.post('/contact_form', (req, res) => {
    console.log('Req received: ', req);
});

app.listen(80, function() {
    console.log('Server is running on port 80');
});
