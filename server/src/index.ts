import express from 'express';
import cors from 'cors';
import { blogPosts, topics, articles } from './data';
import { connectDB } from './db';

const app = express();
const port = 4000;

// Connect to Database
connectDB();

app.use(cors());
app.use(express.json());

// Routes
app.get('/api/topics', (req, res) => {
    res.json(topics);
});

app.get('/api/posts', (req, res) => {
    // Optional: Filter by topic if query param exists
    // const topic = req.query.topic;
    res.json(blogPosts);
});

app.get('/api/posts/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const post = blogPosts.find(p => p.id === id);

    if (post) {
        res.json(post);
    } else {
        res.status(404).json({ message: 'Post not found' });
    }
});

app.get('/api/articles', (req, res) => {
    res.json(articles);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
