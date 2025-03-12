// Start Server Command: npx nodemon src/server.js (script = dev)
import express from "express";
import { MongoClient, ReturnDocument, ServerApiVersion } from 'mongodb';

// const elixerInfo = [
//     { name: 'elixer-hydration', upvotes: 0, comments: [] },
//     { name: 'elixer-chillout', upvotes: 0, comments: [] },
//     { name: 'elixer-bodyboost', upvotes: 0, comments: [] },
//     { name: 'elixer-relaxation', upvotes: 0, comments: [] },
//     { name: 'elixer-moodboost', upvotes: 0, comments: [] }
// ]

const app = express();

app.use(express.json());

let db;

async function connectToDb() {

    //crows-elixers-connection
    const uri = 'mongodb://127.0.0.1:27017/';

    const client = new MongoClient(uri, {
        serverApi: {
            version: ServerApiVersion.v1,
            strict: true,
            deprecationErrors: true
        }
    });

    await client.connect();

    db = client.db('CROWSELIXERS');

}

app.get('/api/elixers/:name', async (req, res) => {
    const { name } = req.params;

    const elixer = await db.collection('ELIXERS').findOne({ name });
    
    res.json(elixer);
});

app.post('/api/elixers/:name/upvote', async (req, res) => {
    const { name } = req.params;

    const updatedElixer = await db.collection('ELIXERS').findOneAndUpdate({ name }, {
        $inc: { upvotes: 1 }
    }, {
        returnDocument: 'after'
    });

    res.json(updatedElixer);
});

app.post('/api/elixers/:name/comments', async (req, res) => {
    const { name } = req.params;
    const { postedBy, text } = req.body;
    const newComment = { postedBy, text };

    const updatedElixer = await db.collection('ELIXERS').findOneAndUpdate({ name }, {
        $push: { comments: newComment }
    }, {
        returnDocument: 'after'
    });

    res.json(updatedElixer);
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

async function start() {
    await connectToDb();
    app.listen(8000, function() {
        console.log('Server is listening on port 8000');
    });
}

start();
