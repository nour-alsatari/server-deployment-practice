"use strict";

const express = require("express");
// require takes the name of a package as a string argument and returns a package/module
//express is the name of the module, and also the name we typically give to the variable we use to refer to its main function
const app = express();



app.get('/' , (req , res) => {
res.status(200).send("welcome to home")}
)

app.get('/data', (req, res) => {
    res.status(200).json({
        firstName:"Nour",
        lastName:"Alsatari"

    })
})

function start(PORT) {
  app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
  });
}

module.exports= { start:start , app: app}