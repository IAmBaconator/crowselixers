// Start Server Command: npx nodemon src/server.js (script = dev)
import express from "express";

const elixerInfo = [
    { name: 'elixer-hydration', upvotes: 0, comments: [] },
    { name: 'elixer-chillout', upvotes: 0, comments: [] },
    { name: 'elixer-bodyboost', upvotes: 0, comments: [] },
    { name: 'elixer-relaxation', upvotes: 0, comments: [] },
    { name: 'elixer-moodboost', upvotes: 0, comments: [] }
]

const app = express();

app.use(express.json());

app.post('/api/elixers/:name/upvote', (req, res) => {
    const elixer = elixerInfo.find(e => e.name === req.params.name);
    elixer.upvotes += 1;

    //res.send('Success! The elixer ' + req.params.name + ' now has ' + elixer.upvotes + ' upvotes!');
    res.json(elixer);
});

app.post('/api/elixers/:name/comments', (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;

    const elixer = elixerInfo.find(e => e.name === name);

    elixer.comments.push({
        postedBy,
        text
    });

    res.json(elixer);
});
// app.get('/hello', function(req, res) {
//     res.send('Hello ' + req.body.name + ' from a GET endpoint!');
// });

// app.get('/hello/:name', function(req, res) {
//     res.send('Hello ' + req.params.name);
// });

// app.post('/hello', function(req, res) {
//     res.send('Hello ' + req.body.name + ' from a POST endpoint!');
// });

app.listen(8000, function() {
    console.log('Server is listening on port 8000');
});