'use client';

const BLOG_POSTS = [
    {
        image: 'linear-gradient(135deg, #003D82 0%, #0052B4 100%)',
        category: 'DSA',
        date: 'Jan 5, 2026',
        title: 'How I Cracked Google with Our A2Z DSA Sheet',
        excerpt: 'A complete breakdown of my 3-month journey from DSA beginner to landing an L4 offer at Google.',
        readTime: '8 min read',
    },
    {
        image: 'linear-gradient(135deg, #FF6B00 0%, #FFA726 100%)',
        category: 'System Design',
        date: 'Jan 3, 2026',
        title: 'Design WhatsApp: Complete System Design Guide',
        excerpt: 'Learn how to design a messaging system handling millions of concurrent users with our step-by-step approach.',
        readTime: '12 min read',
    },
    {
        image: 'linear-gradient(135deg, #003D82 0%, #FF6B00 100%)',
        category: 'Interview Experience',
        date: 'Dec 28, 2025',
        title: 'Amazon SDE-2 Interview: All 5 Rounds Decoded',
        excerpt: 'Detailed breakdown of every round, questions asked, and strategies that helped me clear Amazon interviews.',
        readTime: '10 min read',
    },
];

export default function BlogSection() {
    return (
        <section className="blog" id="blog">
            <div className="container">
                <div className="section-header reveal">
                    <span className="section-tag">Shared Experiences</span>
                    <h2 className="section-title">Learn From Success Stories</h2>
                </div>
                <div className="blog-grid">
                    {BLOG_POSTS.map((post, index) => (
                        <article key={index} className="blog-card reveal">
                            <div className="blog-image" style={{ background: post.image }}>
                                <span className="blog-category">{post.category}</span>
                            </div>
                            <div className="blog-content">
                                <div className="blog-meta">
                                    <span className="blog-date">{post.date}</span>
                                    <span className="blog-read-time">{post.readTime}</span>
                                </div>
                                <h3>{post.title}</h3>
                                <p>{post.excerpt}</p>
                                <a href="#" className="blog-link">
                                    Read More <span>→</span>
                                </a>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
