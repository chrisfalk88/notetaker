const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");


module.exports = function(app) {



    app.get("/api/notes", function(req, res){
        res.json(db)
    })

    app.post("/api/notes", function(req, res) {

        fs.readFile("db/db.json", 'utf-8', function(err, data){
            if (err) throw err;
            console.log(data);
       });

        // req.body.id = uuid.v4();
        //console.log(allNotes);
        // console.log(req.body);
        // console.log(typeof(req.body))

        
        // db.push(req.body)
        // console.log(db.toString());
         //console.log(typeof(allNotes));

        // fs.writeFile("db/db.json", db, function(err){
        //     if (err) throw err
        // })


        res.json(req.body);
        
    })


}

const person = {
    firstName: "Chris",
    lastName: "Falk",
}

person.hairColor = "brown"