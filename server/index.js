const express = require('express');
const cors = require('cors');
const route = require('./routes/study');
const connectDatabase = require('./connection');

const app = express();
const PORT = 8000;

connectDatabase();

app.use(express.json());
app.use(cors());

app.use('/', route);

app.listen(PORT, ()=>{
    console.log(`Server started at ${PORT}`);
})