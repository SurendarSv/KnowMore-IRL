const express = require('express');
const connectDB = require('./db');
const Blog = require('./models/Blog');
const Embedding = require('./models/Embedding');
require('dotenv').config();

const app = express();

// Connect to Database
connectDB();

app.use(express.json());

// Routes
app.use('/api/auth', require('./routes/auth'));

app.get('/', (req, res) => {
    res.send('API is running...');
});

// @route   POST /api/blogs
// @desc    Create a blog post and its embedding
app.post('/api/blogs', async (req, res) => {
    try {
        const { title, content, author, topic, embeddings } = req.body;

        // 1. Save Blog
        const newBlog = new Blog({
            title,
            content,
            author,
            topic,
        });
        const blog = await newBlog.save();

        // 2. Save Embedding if provided
        if (embeddings && Array.isArray(embeddings)) {
            const newEmbedding = new Embedding({
                blogId: blog._id,
                vector: embeddings,
            });
            await newEmbedding.save();
        }

        res.json({ blog, hasEmbedding: !!embeddings });
    } catch (err) {
        console.error(err.message);
        res.status(500).send('Server Error');
    }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
