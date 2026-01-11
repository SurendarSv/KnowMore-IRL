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

// Topic Articles - Full content for each topic
export const topicArticles: Record<string, {
    title: string;
    category: string;
    readTime: string;
    author: { name: string; avatar: string };
    date: string;
    excerpt: string;
    highlights: string[];
    sections: { heading: string; content: string }[];
    relatedTopics: string[];
}> = {
    'How Neural Networks Actually Work': {
        title: 'How Neural Networks Actually Work',
        category: 'AI/ML',
        readTime: '15 min read',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        excerpt: 'A no-hype explanation of neural networks. From perceptrons to backpropagation — how the math actually flows and why it matters for real applications.',
        highlights: [
            'What neurons really compute (it\'s just weighted sums)',
            'Why activation functions exist and which ones to use',
            'Backpropagation explained without the complexity theater',
            'Common pitfalls when training your first networks'
        ],
        sections: [
            {
                heading: 'The Basics: What Is a Neural Network?',
                content: `A neural network is a function approximator. That's it. All the hype, all the buzzwords — at the core, you're building a function that takes inputs and produces outputs.

The magic isn't in any single component. It's in how simple operations compose to approximate incredibly complex functions.

A single neuron takes inputs, multiplies each by a weight, adds them together, adds a bias, and passes the result through an activation function. That's the whole thing.`
            },
            {
                heading: 'Layers: Stacking Simple Operations',
                content: `When you stack neurons in layers, something interesting happens. Each layer learns to extract different features from the data.

In image recognition:
- Early layers learn edges and textures
- Middle layers learn shapes and patterns
- Later layers learn high-level concepts (faces, objects)

This hierarchical learning isn't something we program — it emerges from training. The network discovers what features are useful for the task.`
            },
            {
                heading: 'Backpropagation: How Networks Learn',
                content: `Training a neural network means adjusting weights to minimize error. Backpropagation is the algorithm that makes this efficient.

The key insight: we can use the chain rule from calculus to compute how each weight affects the final error. Then we nudge each weight in the direction that reduces error.

This is gradient descent. We're walking downhill on an error surface, and backprop tells us which direction is "downhill" for every weight simultaneously.

The math isn't magic — it's just derivatives applied systematically. The scale is what makes it impressive: billions of weights, updated in parallel, across millions of examples.`
            },
            {
                heading: 'Common Mistakes When Starting Out',
                content: `**1. Not normalizing inputs**
Networks train better when inputs are centered around zero with similar scales. Skip this, and one feature dominates.

**2. Learning rate too high or too low**
Too high: training explodes. Too low: training takes forever. Start with 0.001, adjust from there.

**3. Overfitting on small datasets**
If your network has more parameters than data points, you're just memorizing. Use regularization, dropout, or get more data.

**4. Ignoring the loss curve**
If loss isn't decreasing, something is wrong. If validation loss increases while training loss decreases, you're overfitting. Watch the curves.`
            },
            {
                heading: 'When to Use (and Not Use) Neural Networks',
                content: `Neural networks excel when:
- You have lots of data
- The patterns are complex and non-linear
- Feature engineering would be painful

They're overkill when:
- A linear model would work
- You have limited data
- Interpretability is critical

Don't reach for deep learning first. Try simpler methods. If they fail, then escalate. A 3-line logistic regression that works is better than a 300-layer transformer that doesn't.`
            }
        ],
        relatedTopics: ['Understanding Transformers', 'Model Training vs Fine-tuning', 'Getting Models to Production']
    },
    'LLMs — Beyond the Buzzwords': {
        title: 'LLMs — Beyond the Buzzwords',
        category: 'AI/ML',
        readTime: '12 min read',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        excerpt: 'Cut through the marketing noise. Understand what Large Language Models actually are, how they work, and what they can (and can\'t) do.',
        highlights: [
            'What LLMs actually learn during training',
            'Tokenization and why it matters',
            'The limits of "understanding" — what LLMs can\'t do',
            'Practical use cases that make sense today'
        ],
        sections: [
            {
                heading: 'What LLMs Actually Are',
                content: `Large Language Models are prediction machines. Given a sequence of tokens, they predict the next token. That's the core mechanism.

The "large" part refers to parameters — GPT-4 has over a trillion. More parameters allow the model to capture more patterns, but it's still fundamentally doing the same thing: next-token prediction.

What makes this useful is that predicting text well requires learning a lot about the world. You can't predict "The capital of France is ___" without knowing something about geography.`
            },
            {
                heading: 'Training: Three Phases',
                content: `**1. Pre-training**
Feed the model massive amounts of text. It learns grammar, facts, reasoning patterns — all by predicting the next word. This is expensive (millions of dollars).

**2. Instruction Fine-tuning**
Train on examples of instructions and responses. The model learns to follow commands, not just predict text.

**3. RLHF (Reinforcement Learning from Human Feedback)**
Humans rate outputs. The model learns what humans prefer. This is what makes ChatGPT feel "aligned" with what you want.`
            },
            {
                heading: 'What LLMs Can\'t Do',
                content: `**They don't "understand" — they pattern-match**
An LLM has no world model. It can't verify if what it says is true. It generates plausible text based on patterns.

**They can't do reliable math**
Tokenization breaks numbers weirdly. "123456" isn't seen as a number — it's tokens. Simple arithmetic fails on novel numbers.

**They have no persistent memory**
Each conversation starts fresh. There's no learning between sessions unless you build that layer.

**Reasoning is fragile**
LLMs can appear to reason, but it's pattern matching on reasoning examples. Push beyond training distribution and it falls apart.`
            }
        ],
        relatedTopics: ['Prompt Engineering in Practice', 'Building with LangChain', 'Working with OpenAI APIs']
    },
    'Docker — How It Really Works': {
        title: 'Docker — How It Really Works',
        category: 'DevOps',
        readTime: '10 min read',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        excerpt: 'Containers demystified. What\'s actually happening when you run docker run, and why it matters for building reliable applications.',
        highlights: [
            'Containers are not VMs — here\'s the actual difference',
            'What namespaces and cgroups do under the hood',
            'Image layers and why they matter for build speed',
            'Common Docker mistakes and how to avoid them'
        ],
        sections: [
            {
                heading: 'Containers Are Not VMs',
                content: `This is crucial. A container is not a lightweight VM. There's no virtualized hardware. No guest OS.

A container is a process. That's it. It's your application running in an isolated environment, but it's still just a Linux process sharing the host kernel.

The isolation comes from kernel features — namespaces and cgroups — not from virtualization. This is why containers start in milliseconds while VMs take minutes.`
            },
            {
                heading: 'Namespaces: Isolation',
                content: `Linux namespaces give processes their own view of the system:

- **PID namespace**: Process sees itself as PID 1
- **Network namespace**: Its own network stack, IP addresses
- **Mount namespace**: Its own filesystem view
- **User namespace**: Can appear as root inside, unprivileged outside

When you exec into a container, you're entering these namespaces. The container thinks it's alone on the system. It's not.`
            },
            {
                heading: 'Cgroups: Resource Limits',
                content: `Control groups limit what resources a container can use:

- CPU: How much processing time
- Memory: Hard limits, OOM killer if exceeded
- I/O: Disk bandwidth limits

This is why containers can't hog the host. cgroups enforce the quotas. Without them, a runaway container could starve everything else.`
            },
            {
                heading: 'Image Layers: Why They Matter',
                content: `Docker images are layers. Each Dockerfile instruction creates a layer. Layers are cached and shared.

Why this matters:
- **Build speed**: Change one line, only rebuild that layer and above
- **Disk space**: Common base images are shared between containers
- **Pull speed**: Only download layers you don't have

Order your Dockerfile wisely: put things that change rarely at the top, things that change often at the bottom.`
            }
        ],
        relatedTopics: ['Kubernetes Without the Complexity', 'CI/CD That Makes Sense', 'Infrastructure as Code Fundamentals']
    },
    'Kubernetes Without the Complexity': {
        title: 'Kubernetes Without the Complexity',
        category: 'DevOps',
        readTime: '12 min read',
        author: { name: 'Surendar SV', avatar: '👨‍💻' },
        date: 'Jan 2026',
        excerpt: 'A practical guide to Kubernetes that focuses on what you actually need. Skip the complexity theater, get containers running in production.',
        highlights: [
            'The 5 resources you actually need to know',
            'Mental model: what Kubernetes is trying to do',
            'Debugging pods that won\'t start',
            'When to use (and not use) Kubernetes'
        ],
        sections: [
            {
                heading: 'The Mental Model',
                content: `Kubernetes does one thing: it runs containers where you tell it to and keeps them running.

You declare the desired state ("I want 3 replicas of this container"), and Kubernetes makes it happen. If a container dies, it starts a new one. If a node fails, it moves containers to healthy nodes.

That's the core value. Everything else is details.`
            },
            {
                heading: 'The Core 5 Resources',
                content: `**Pod**: One or more containers that run together. The atomic unit.

**Deployment**: Manages pods. Handles rollouts, scaling, and updates.

**Service**: Stable networking. Pods come and go, but the Service IP stays constant.

**Ingress**: Routes external traffic to Services. Your entry point.

**ConfigMap/Secret**: Configuration and sensitive data, injected into pods.

Start here. Ignore everything else until you need it.`
            },
            {
                heading: 'When a Pod Won\'t Start',
                content: `Check these in order:

1. **kubectl describe pod <name>**: Look at Events at the bottom
2. **kubectl logs <pod>**: Application logs
3. **kubectl get events**: Cluster-wide events

Common culprits:
- Image pull failures (wrong registry, auth issues)
- Resource limits (not enough memory requested)
- ConfigMap/Secret not found
- Liveness probe failing immediately`
            }
        ],
        relatedTopics: ['Docker — How It Really Works', 'CI/CD That Makes Sense', 'Monitoring That Matters']
    }
};
