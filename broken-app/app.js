const express = require('express');
const axios = require('axios');
const app = express();

const ExpressError = require("./expressError")


app.use(express.json());

app.post('/', function (req, res, next) {
    try {

        let developers = req.body.developers;
        let devInfo = developers.map(async d => {
            return await axios.get(`https://api.github.com/users/${d}`);
        });

        let allDevData = devInfo.map(dev => (`{ name: ${dev.data}, bio: ${dev.data} }`));
        return res.json(allDevData);

    } catch (err) {
        return next(err);
    }
});

app.get('/', function (req, res, next) {
    async function getUser() {
        console.log('hello')
        let res = await axios.get('https://api.github.com/users/elie');
        console.log(res)
    }
})

// If no other route matches, respond with a 404
app.use((req, res, next) => {
    const e = new ExpressError("Page Not Found", 404);
    next(e);
});

//global error handler 
app.use(function (err, req, res, next) {

    let status = err.status || 500;
    let message = err.msg;
    console.log(err)
    return res.status(status).json({
        error: { message, status }
    });
});

app.listen(3000, function () {
    console.log('App on port 3000');
});
