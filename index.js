const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51KLvn4SGc8SKoV9qktRL1rmKpPTVMkaSAUb73ZPejEsdJzGcQ3h1EZqflrODloC0KJBbkzflzdark0oIYIrVJaid00IoyVgcqn');

// API

// - App config
const app = express();

// - Middlewares
app.use(cors({ origin: true}));
app.use(express.json());

// - API routtes
app.get('/', (req, res) => res.status(200).send('hello world'));

app.post("/payments/create", async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Recieved BOOM!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // subunits of the currency
        currency: "usd",
      });

    // OK - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// -  Listen command
exports.api = functions.https.onRequest(app)

// Example endpoint
//http://localhost:5001/clone-44759/us-central1/api