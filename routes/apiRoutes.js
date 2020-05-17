const notes = require("../db/db");
const writeToFile = require("../db/readWriteToDbJson");
const uniqid = require('uniqid');
// ===============================================================================
// ROUTING
// ===============================================================================

module.exports = function (app) {
    

    // API GET Request
    // Reads all data from db.json file
    app.get("/api/notes", function (req, res) {
        res.json(notes);
        res.end(true);
    });

    // API POST Request
    // Below code handles when a user submits a form and thus submits data to the server.
    app.post("/api/notes", function (req, res) {
        
        let newNote = req.body;
        newNote.id = uniqid();
        console.log(newNote);
        notes.push(newNote); 
        
        res.json(newNote);
        
        writeToFile(notes); 
        res.end(true)
    });

    // ---------------------------------------------------------------------------
    // I added this below code so you could clear out the table while working with the functionality.
    // Don"t worry about it!

    app.delete("/api/notes/:id", function (req, res) {
        let noteId = req.params.id;
        let notess = notes;
        notess.forEach(note => {
            if (note.id === noteId) {
                notess.splice(notess.indexOf(note), 1);
            }
        });
        // console.log(notes);
        writeToFile(notess);
        res.status(200).send(true);
        res.end("Deleted Successfully!");
    });


};
