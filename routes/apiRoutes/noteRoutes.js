const router = require('express').Router();
const { createNewNote } = require('../../lib/notes');
const { notes } = require('../../db/db.json');

router.get('/notes', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

router.post('/notes', (req, res) => {
    // set id based on what the next index of the array will be
    req.body.id = notes.length.toString();

    //add note to json file and notes array in this function
    const note = createNewNote(req.body, notes);

    res.json(req.body);

});

router.delete('/:id', (req, res) => {
    Note.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(dbDbJson => {
        if (!dbDbJson) {
          res.status(404).json({ message: 'No note found with this id' });
          return;
        }
        res.json(dbDbJson);
      })
      .catch(err => {
        console.log(err);
        res.status(500).json(err);
      });
  });


module.exports = router;