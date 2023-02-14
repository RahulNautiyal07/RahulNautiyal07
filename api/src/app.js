require('../src/services/mongo_init');

const express = require('express');
const app =  express();
const config = require('config');
const port =  config.get('port');
const controllers = require('./routes');
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}));
app.use('/api/v1/',controllers)

app.listen(port,()=>{
    console.log(`server is running on  port ${port} in a ${process.env.NODE_ENV}`)
})