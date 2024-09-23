const express = require('express');

const cors = require('cors');

const routes = require('./routes');

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());

app.use(cors());

// app.use((req,res,next) =>{
    // res.setHeader('Access-Control-Allow-Origin', '*');
    // res.setHeader('Access-Control-Allow-Methods', '*');  // instal cors!
    // res.setHeader('Access-Control-Allow-Headers', '*');

    // next();
// })

app.get('/', (req, res) => {
    res.send('RESTful service');
});

app.use( routes);

app.listen(3030, () => console.log('RESTful server is listening on port 3030...'));
