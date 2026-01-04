const mongoose = require('mongoose');

const embeddingSchema = new mongoose.Schema({
    blogId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Blog',
        required: true,
    },
    vector: {
        type: [Number],
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
}, { collection: 'vector_embeddings' });

const Embedding = mongoose.model('Embedding', embeddingSchema);

module.exports = Embedding;
