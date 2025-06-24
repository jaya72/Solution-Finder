const express = require('express');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const uri = "mongodb+srv://ProblemStatements:Radha0702@yourproblemcluster.9ojzfzr.mongodb.net/?retryWrites=true&w=majority&appName=YourProblemCluster";
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

let db;
let collection;

async function main() {
  try {
    await client.connect();
    db = client.db("SolutionFinder"); // ✅ match DB name
    collection = db.collection("problems");

    console.log("Connected to MongoDB Atlas!");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}
main();

// ✅ POST route (already working)
app.post('/api/problems', async (req, res) => {
  const { statement } = req.body;
  if (!statement) {
    return res.status(400).json({ error: 'Problem statement is required' });
  }

  try {
    await collection.insertOne({ statement, createdAt: new Date() });
    res.status(201).json({ message: 'Problem statement submitted successfully' });
  } catch (error) {
    console.error('Error saving to DB:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// ✅ 🔍 Add this GET route here!
app.get('/api/search', async (req, res) => {
  const keyword = req.query.q;

  if (!keyword) {
    return res.status(400).json({ message: 'Keyword is required' });
  }

  try {
    const results = await collection.find({
      statement: { $regex: keyword, $options: 'i' }
    }).toArray();

    res.json(results);
  } catch (error) {
    console.error('Search failed:', error);
    res.status(500).json({ message: 'Search failed', error });
  }
});

// ✅ Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
