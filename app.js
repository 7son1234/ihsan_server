const express = require('express');
var cors = require('cors');
const mongoose = require('mongoose');
const Routes = require('./API/routes/Routes');
const app = express();
app.use(express.json());
app.use(cors());



const mongooselink = 'mongodb+srv://7son2312:I12345678@cluster0.tbtekkz.mongodb.net/';

mongoose.connect(mongooselink);

mongoose.connection.on('connected', () => {
    console.log('mongoose connected');
});



mongoose.connection.on("error", (e) => {
    console.log("connctions error: ", e);
})


app.get('/app', (req, res) => {

    res.status(200).json({
        name: 'ihsan qasim'
    })

})

app.post('/whatsMyName', (req, res) => {
    const { firstname, lastname } = req.body;

    if (!firstname || !lastname) {
        res.status(305).json({
            error: true,
            errorMessage: 'firstname and lastname are must!',
        });

        return;
    }

    res.status(200).json({
        fullName: firstname + "" + lastname,
    });

});

app.get('/', (req,res)=>{
    res.status(200).json({
        name:'live'
    })
})



 app.use(Routes)

module.exports = app;
