const express = require('express');
const config = require('config');
const app = express();
app.use('/', require('./router/main'));

app.listen(config.get('server.port'), config.get('server.hostname'), () => {
    try {
        console.log(`listening on ${config.get('server.hostname')}:${config.get('server.port')}`);
    } catch (error) {
        return console.error(error);
    }
});