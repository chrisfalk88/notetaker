const db = require("../db/db.json");
const fs = require("fs");
const uuid = require("uuid");


module.exports = function(app) {



    app.get("/api/notes", function(req, res){
        //change this to read and then return it in res.json

        fs.readFile("db/db.json", 'utf-8', function (err, data){
            if (err) throw err;
            res.json(JSON.parse(data));
        })

       
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
            //call writetoDB to rewrite to db file 
            //removing json stringify
            writetoDB(JSON.stringify(allNotes));
       });

      
 


        res.json(req.body);
        
    })


    app.delete("/api/notes/:id", function(req, res){
        let selectedID = req.params.id;
           //when this route is called, we read the db file and then parse it into JSON object notation so we can maniuplate the objects within
            fs.readFile("db/db.json", "utf-8", function(err, data){

                if (err) throw err;

                let allNotes = JSON.parse(data);
                console.log(allNotes);
                allNotes = allNotes.filter(note => note.id !== selectedID)
                
                let deletedNote = allNotes.filter(note => note.id === selectedID);
                console.log(deletedNote);

                writetoDB(JSON.stringify(allNotes));

                res.json(allNotes)
            });

        

       })


}

function writetoDB(notes) {
    fs.writeFile("db/db.json", notes, function(err){
        if (err) throw err
    })
}