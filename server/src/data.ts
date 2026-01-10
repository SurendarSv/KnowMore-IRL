export const blogPosts = [
    {
        id: 1,
        featured: true,
        title: 'ML Pipelines in Production: What Actually Matters',
        excerpt: 'A practical look at building ML systems that work beyond notebooks. Data versioning, model registries, and monitoring — without the enterprise fluff.',
        category: 'AI/ML',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        readTime: '12 min read',
        image: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        content: `
# ML Pipelines in Production

Building machine learning models in a notebook is one thing. Getting them to run reliably in production is another entirely.

## The Gap

Most courses teach you how to train a model. They give you a clean CSV, you run fit(), and you get an accuracy score. Great. Now what?

In the real world, data comes in messy streams. Models drift. Latency matters. And "it works on my machine" is not a valid deployment strategy.

## Key Components

1. **Data Validation**: Is the data coming in today looking like the data you trained on yesterday?
2. **Feature Store**: Are you calculating features consistently between training and inference?
3. **Model Registry**: Which version of the model is currently running? Who approved it?
4. **Monitoring**: Not just system metrics (CPU/RAM), but model metrics. Is the prediction distribution shifting?

## Conclusion

Stop focusing solely on the algorithm. The best model in the world is useless if you can't ship it reliably.
`
    },
    {
        id: 2,
        featured: false,
        title: 'Kubernetes: The Parts That Actually Matter',
        excerpt: 'Skip the complexity theater. Here\'s what you need to know to run containers in production without losing your mind.',
        category: 'DevOps',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        readTime: '8 min read',
        image: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
        content: `
# Kubernetes: The Reality

Kubernetes has a reputation for being complex. And it is. But most of that complexity is optional.

## What You Actually Need

You don't need to master every CRD to be effective. Focus on the core primitives:

*   **Pods**: The atomic unit of deployment.
*   **Deployments**: Managing replicas and updates.
*   **Services**: Networking and load balancing.
*   **Ingress**: Getting traffic into the cluster.
*   **ConfigMaps & Secrets**: Configuration management.

## What to Ignore (At First)

Don't start with service meshes. Don't write your own operators on day one. Stick to the basics, get your app running, and only add complexity when you have a specific problem that the basics can't solve.
`
    },
    {
        id: 3,
        featured: false,
        title: 'Terraform Beyond Tutorials',
        excerpt: 'Real patterns for managing infrastructure at scale. State management, modules, and the mistakes everyone makes.',
        category: 'DevOps',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        readTime: '10 min read',
        image: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
        content: `
# Terraform Best Practices

Infrastructure as Code (IaC) is great until your state file gets corrupted or you accidentally delete the production database.

## State Management

Never store state locally. Use a remote backend like S3 with DynamoDB locking. This seems obvious, but it's the number one cause of "why is the build broken?"

## Modules

Don't copy-paste resource blocks. Build reusable modules. But don't over-abstract. A module that just wraps a single resource with 50 variables is worse than just using the resource directly.

## Directory Structure

Split your environments (prod, stage, dev). Don't use workspaces for environment separation unless you really know what you're doing. It's too easy to apply the wrong config to the wrong environment.
`
    },
    {
        id: 4,
        featured: false,
        title: 'RAG Systems: Building AI That Uses Your Data',
        excerpt: 'How to build retrieval-augmented generation apps that actually work. Embeddings, vector stores, and practical deployment.',
        category: 'AI/ML',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        readTime: '15 min read',
        image: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
        content: `
# RAG Systems

Retrieval-Augmented Generation (RAG) is the bridge between LLMs and your private data.

## The Challenge

It's easy to build a demo RAG app. It's hard to build one that doesn't hallucinate or retrieve irrelevant context.

## Embeddings Matter

Your choice of embedding model determines what "similarity" means. Generic models are okay, but domain-specific embeddings often yield much better retrieval results.

## Chunking Strategies

Don't just split by character count. Split by semantic meaning. A paragraph is a unit of thought. A sentence is a unit of thought. A random 500-token chunk is noise.

## Re-ranking

Retrieving the top-k documents is just the first step. Use a re-ranker model to score those candidates before feeding them to the LLM. This significantly improves response quality.
`
    }
];

export const topics: Record<string, string[]> = {
    ai: [
        'How Neural Networks Actually Work', 'LLMs — Beyond the Buzzwords', 'Prompt Engineering in Practice',
        'Computer Vision Fundamentals', 'Building with LangChain', 'Working with OpenAI APIs',
        'Model Training vs Fine-tuning', 'Getting Models to Production', 'PyTorch in Real Projects',
        'Understanding Transformers', 'When to Use Vector DBs', 'AI Ethics & Limitations'
    ],
    devops: [
        'Git Beyond the Basics', 'Docker — How It Really Works', 'Kubernetes Without the Complexity',
        'CI/CD That Makes Sense', 'GitHub Actions for Real Projects', 'AWS, Azure, GCP — Honest Comparisons',
        'Serverless — When It Fits', 'Infrastructure as Code Fundamentals', 'Terraform in Practice',
        'Monitoring That Matters', 'Linux for Engineers', 'Security Basics You Should Know'
    ],
    // Coding topics kept for future use
    coding: [
        'Arrays & Strings', 'Linked Lists', 'Stacks & Queues',
        'Trees & Graphs', 'Dynamic Programming', 'Greedy Algorithms',
        'Binary Search', 'Sliding Window', 'Two Pointers',
        'Backtracking', 'Bit Manipulation', 'System Design Basics'
    ]
};

// Articles - real content, no clickbait
export const articles = [
    { id: 4, title: 'How RAG Actually Works (and When It Doesn\'t)', date: 'Jan 2026', tag: 'AI/ML', icon: '🧠', hidden: false },
    { id: 2, title: 'Kubernetes in Production: What They Don\'t Tell You', date: 'Jan 2026', tag: 'DevOps', icon: '⚙️', hidden: false },
    { id: 1, title: 'Mastering Dynamic Programming Patterns', date: 'Dec 2025', tag: 'Coding', icon: '💻', hidden: true }
];
