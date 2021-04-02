

const express = require('express');
const bcrypt = require('bcrypt-nodejs');
const Clarifai = require('clarifai');
const cors = require('cors');
const knex = require('knex');
const register = require('./controllers/register');
const signin = require('./controllers/signin');
const profile = require('./controllers/profile');
const image = require('./controllers/image');
const detection = require('./controllers/detection');

const PORT = process.env.PORT || 3000; //Default port is 3000
const clarifaiAPIKey = process.env.KEY;

const clarifaiApp = new Clarifai.App({
    apiKey: clarifaiAPIKey
  });
  
//Postgresql Database
const db = knex({
    client: 'pg',
    connection: {
        host: '127.0.0.1',
        user: 'postgres',
        password: 'test123',
        database: 'face-recognition'
    }
});

const app = new express();

//Middleware
app.use(express.json());
app.use(cors());

//Handler Functions
app.get('/', (req, res) => {res.json('success');})
app.post('/signin', signin.handleSignIn(db, bcrypt));
app.post('/detection', detection.handleDetection(clarifaiApp));
app.post('/register', register.handleRegister(db, bcrypt));
app.post('/imageapi', register.handleRegister(db, bcrypt));
app.get('/profile/:id', profile.handleProfile(db));
app.put('/image', image.handleImage(db));

app.listen(PORT, () => {
    console.log(`App is running on port ${PORT}`);
})