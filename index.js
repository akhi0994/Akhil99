const express = require('express');
const app = express();
const port = 8000;



app.listen(port,function(err){
    if(err){
        console.log(`Errros in running the server: ${err}`);
    }
    console.log(`server is running on the port: ${port}`);


});