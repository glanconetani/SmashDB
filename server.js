const express = require('express');

const app = express();

app.get('/api/characters', (req,res) => {
 const characters = [
   {id: 1, Name: 'Mario'}
 ];

 res.json(characters);
});

const port = 5000;

app.listen(port, () => console.log('Server started on port ${port}'));
