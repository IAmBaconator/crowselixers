import express from "express";

const elixerInfo = [
    { name: 'elixer-hydration', upvotes: 0 },
    { name: 'elixer-chillout', upvotes: 0 },
    { name: 'elixer-bodyboost', upvotes: 0 },
    { name: 'elixer-relaxation', upvotes: 0 },
    { name: 'elixer-moodboost', upvotes: 0 }
]

const app = express();

app.use(express.json());

app.post('/api/elixers/:name/upvote', (req, res) => {
    const elixer = elixerInfo.find(e => e.name === req.params.name);
    elixer.upvotes += 1;

    res.send('Success! The elixer ' + req.params.name + ' now has ' + elixer.upvotes + ' upvotes!');
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