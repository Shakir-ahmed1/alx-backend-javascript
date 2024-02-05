const express = require('express');

const app = express();
const port = 7865;

app.get('/', (req,res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('called');
    if (isNaN(id)) {
        // res.sendStatus(404);
        next();
    } else {
        res.status
        res.send(`Payment methods for cart ${id}`);
    }
});
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});
module.exports = app;