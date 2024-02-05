const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 7865;
app.use(bodyParser.json());
app.get('/', (req,res) => {
    res.send('Welcome to the payment system');
});

app.get('/cart/:id', (req, res, next) => {
    const id = req.params.id;
    console.log('called');
    if (isNaN(id)) {
        next();
    } else {
        res.send(`Payment methods for cart ${id}`);
    }
});
app.listen(port, () => {
    console.log(`API available on localhost port ${port}`);
});

app.get('/available_payments', (req, res) => {
    const data = {
        payment_methods: {
          credit_cards: true,
          paypal: false
        }
      }
    res.send(JSON.stringify(data));
});
app.post('/login', (req, res) => {
    
    res.send(`Welcome ${req.body.userName}`);
});
module.exports = app;