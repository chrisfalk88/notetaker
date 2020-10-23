const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");

module.exports = function(app) {


    app.get("/api/notes", function(req, res){
        res.json(db)
    })

    app.post("/api/notes", function(req, res) {
        db.push(req.body)
        //call fs here? 
        // give ids here 
        //uuid npm --> google this 
       // req.body.id ="FWEAj89we7032rohfawen"
        console.log(db);
        res.json(req.body);
        
    })


}

const person = {
    firstName: "Chris",
    lastName: "Falk",
}

person.hairColor = "brown"