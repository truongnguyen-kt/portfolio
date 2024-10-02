const express = require('express');
const app = express();
const viewEngine = require('./config/viewEngineConfig');
const webRouter = require('./routes/web');

require('dotenv').config();

const port = process.env.PORT
const host = process.env.HOST
// config view engine and public files
viewEngine(app)

// routing
app.use('/', webRouter)

app.listen(port, host, () => {
    console.log(`Listening on port ${port}`);
})