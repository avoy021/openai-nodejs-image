const express = require('express');
const path = require('path');
const dotenv = require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

//set static folder
app.use(express.static(path.join(__dirname,'public')));

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : false}));
 
app.use('/openai', require('./routes/generateImage'));

app.listen(PORT, () => console.log(`Server is running at PORT ${PORT}`));