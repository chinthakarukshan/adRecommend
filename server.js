const express = require('express');
const bodyParser = require('body-parser');
const url = require('url');
const request = require('request');

var app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var port = process.env.PORT || 3000;

app.get('/advertisement/recommendation',(req,res)=>{

    let gender  = req.query.gender;
    let age = req.query.age;

    const param ="?code=I7XrFgSMJ/J13pqGVFee3RoYRamIGRGPix8Pa3oKFkpEn7AMH4IqJw==&fbclid=IwAR0g-7bOLn4AxiuuzHDS5cwT_3oA6fq3c0Jz3anWFSDX5iBNBrSyr3ufK4Q&gender=" + gender + "&age=" + age;

    try {
        request.get({
            url: 'https://advertising.azurewebsites.net/api/recomendations'+param,
            headers: {
                "content-type": "application/json"
            }
    
        }, ( error, response, body) => {
             res.send(body)
        })
          
      } catch (error) {
          res.send(error)
      }
});

app.listen(port, () => {
    console.log('Running on port ' + port);
});