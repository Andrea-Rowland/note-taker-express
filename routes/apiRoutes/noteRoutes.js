const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const notes = require('../../db/db.json');
const { v4: uuidv4 } = require('uuid');
const fs = require('fs');
const path= require('path');

router.get('/notes', (req, res) => {
    let results = notes;
    res.json(results);
});

router.post('/notes', (req, res) => {
  let results = notes;
    // set id based on what the next index of the array will be
    let {title, text} = req.body;

    let newNote = {title, text, id: uuidv4()}

    results.push(newNote);

    //add note to json file and notes array in this function
    const write = fs.writeFileSync(
      path.join(__dirname, '../../db/db.json'),
      JSON.stringify(results)
  );

    res.json(write);

});

// router.delete('/notes/:id', (req, res) => {
//   //fs read file instead!
//   fs.readFile('../../db/db.json', (err, data) => {
//     console.log(data);
//  })
//   // let results = notes;

//   const newArr = results.filter(deleteNote => deleteNote.id !== req.params.id);

//   const write = fs.writeFileSync(
//     path.join(__dirname, '../../db/db.json'),
//     JSON.stringify(newArr)
// );

//   res.json(write);
   
//   });


module.exports = router;