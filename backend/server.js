// import express from 'express';
const express = require('express')

// import cors from 'cors';
// import bodyParser from 'body-parser';



const app = express();
// const router = express.Router();

// app.use(cors());
// app.use(bodyParser.json());


// app.use('/' , router);
app.get('/',(req,res) => res.send('hello'));

app.listen(4000, () => console.log('Express server runing on poer 4000'));
