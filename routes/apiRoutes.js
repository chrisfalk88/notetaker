const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");


module.exports = function(app) {



    app.get("/api/notes", function(req, res){
        res.json(db)
    });

    app.post("/api/notes", function(req, res) {
        req.body.id = uuid.v4();
        

        fs.readFile("db/db.json", 'utf-8', function(err, data){

            if (err) throw err;
            //
            console.log(data);
            //readFile makes this is a string. 
            // parse it back into a JSON object
            let allNotes = JSON.parse(data);
            console.log(allNotes);
            //then we can push the req into the array
            allNotes.push(req.body)
            console.log(allNotes);

            writetoDB(JSON.stringify(allNotes));
       });

       app.delete("/api/notes/"+req.body.id, "utf-8", function(req, res){
            
            res.send("deleted note")
       })

 


        res.json(req.body);
        
    })


}

function writetoDB(notes) {
    fs.writeFile("db/db.json", notes, function(err){
        if (err) throw err
    })
}