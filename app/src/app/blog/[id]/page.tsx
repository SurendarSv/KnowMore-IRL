'use client';

import Link from 'next/link';
import { blogPosts } from '../../../data/content';
import { notFound } from 'next/navigation';
import { use } from 'react';
import '../../style.css';

export default function BlogPostPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = use(params);
    const post = blogPosts.find((p) => p.id.toString() === id);

    if (!post) {
        notFound();
    }

    // Get related posts (same category, excluding current)
    const relatedPosts = blogPosts
        .filter((p) => p.category === post.category && p.id !== post.id)
        .slice(0, 3);

    return (
        <div className="site-wrapper">
            {/* Navigation Bar */}
            <nav className="topic-nav">
                <div className="container topic-nav-inner">
                    <Link href="/" className="topic-brand">
                        <svg width="28" height="28" viewBox="0 0 100 100">
                            <polygon points="20,80 70,30 50,30 50,10" fill="currentColor" />
                            <circle cx="75" cy="25" r="12" fill="#f59e42" />
                        </svg>
                        <span className="topic-brand-text">
                            <span className="topic-brand-know">KnowMore</span>
                            <span className="topic-brand-irl">IRL</span>
                        </span>
                    </Link>
                    <div className="topic-nav-links">
                        <Link href="/#what-we-cover">Topics</Link>
                        <Link href="/#recent-writes">Articles</Link>
                        {/* <Link href="/#blog">Deep Dives</Link> */}{/* Hidden for now */}
                    </div>
                </div>
            </nav>

            <main className="container topic-main">
                {/* Breadcrumb */}
                <div className="topic-breadcrumb">
                    <Link href="/">Home</Link>
                    <span className="topic-breadcrumb-sep">›</span>
                    <Link href="/#blog">Blog</Link>
                    <span className="topic-breadcrumb-sep">›</span>
                    <span className="topic-breadcrumb-current">{post.category}</span>
                </div>

                <div className="topic-layout">
                    {/* Main Content */}
                    <article className="topic-article">
                        {/* Category & Meta */}
                        <div className="topic-meta">
                            <span className="topic-category-badge">{post.category}</span>
                            <span className="topic-meta-dot">•</span>
                            <span className="topic-read-time">{post.readTime}</span>
                        </div>

                        {/* Title */}
                        <h1 className="topic-title">{post.title}</h1>

                        {/* Excerpt */}
                        <p className="topic-excerpt">{post.excerpt}</p>

                        {/* Author & Date Bar */}
                        <div className="topic-author-bar">
                            <div className="topic-author-info">
                                <span className="topic-author-avatar">{post.author.avatar}</span>
                                <div>
                                    <div className="topic-author-name">{post.author.name}</div>
                                    <div className="topic-author-date">{post.date}</div>
                                </div>
                            </div>
                            <div className="topic-share-buttons">
                                <button className="topic-share-btn" title="Share on X">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
                                    </svg>
                                </button>
                                <button className="topic-share-btn" title="Copy link">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
                                        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
                                    </svg>
                                </button>
                            </div>
                        </div>

                        {/* Featured Image */}
                        <div className="blog-hero-image" style={{ background: post.image }}></div>

                        {/* Highlights Box */}
                        <div className="topic-highlights-box">
                            <h3 className="topic-highlights-title">
                                <span>⚡</span> What You'll Learn
                            </h3>
                            <ul className="topic-highlights-list">
                                <li>
                                    <span className="topic-highlight-arrow">→</span>
                                    <span>Core concepts explained with real-world context</span>
                                </li>
                                <li>
                                    <span className="topic-highlight-arrow">→</span>
                                    <span>Practical implementation patterns</span>
                                </li>
                                <li>
                                    <span className="topic-highlight-arrow">→</span>
                                    <span>Common mistakes and how to avoid them</span>
                                </li>
                            </ul>
                        </div>

                        {/* Article Content */}
                        <div className="topic-sections">
                            <section className="topic-section">
                                <div className="topic-section-content blog-content">
                                    {post.content ? (
                                        post.content.split('\n\n').map((paragraph, idx) => {
                                            // Handle headings
                                            if (paragraph.startsWith('# ')) {
                                                return <h2 key={idx} className="topic-section-heading">{paragraph.replace('# ', '')}</h2>;
                                            }
                                            if (paragraph.startsWith('## ')) {
                                                return <h3 key={idx} className="blog-subheading">{paragraph.replace('## ', '')}</h3>;
                                            }
                                            // Handle lists
                                            if (paragraph.includes('\n-') || paragraph.startsWith('-')) {
                                                const items = paragraph.split('\n').filter(line => line.startsWith('-') || line.trim().startsWith('-'));
                                                return (
                                                    <ul key={idx} className="blog-list">
                                                        {items.map((item, i) => (
                                                            <li key={i}>{item.replace(/^-\s*/, '').replace(/^\*\*/, '').replace(/\*\*$/, '')}</li>
                                                        ))}
                                                    </ul>
                                                );
                                            }
                                            // Handle numbered lists
                                            if (paragraph.match(/^\d\./)) {
                                                const items = paragraph.split('\n').filter(line => line.match(/^\d\./));
                                                return (
                                                    <ol key={idx} className="blog-list blog-list-ordered">
                                                        {items.map((item, i) => (
                                                            <li key={i}>{item.replace(/^\d\.\s*/, '').replace(/\*\*/g, '')}</li>
                                                        ))}
                                                    </ol>
                                                );
                                            }
                                            // Regular paragraph with bold text handling
                                            return (
                                                <p key={idx}>
                                                    {paragraph.split('**').map((part, partIdx) =>
                                                        partIdx % 2 === 1
                                                            ? <strong key={partIdx}>{part}</strong>
                                                            : part
                                                    )}
                                                </p>
                                            );
                                        })
                                    ) : (
                                        <p>Full article content coming soon. This is a preview of the blog post structure.</p>
                                    )}
                                </div>
                            </section>
                        </div>

                        {/* Tags */}
                        <div className="blog-tags">
                            <span className="blog-tags-label">Tags:</span>
                            <span className="blog-tag">{post.category}</span>
                            <span className="blog-tag">Engineering</span>
                            <span className="blog-tag">Tutorial</span>
                        </div>
                    </article>

                    {/* Sidebar */}
                    <aside className="topic-sidebar">
                        {/* Author Card */}
                        <div className="topic-sidebar-card">
                            <h4 className="topic-sidebar-title">About the Author</h4>
                            <div className="topic-sidebar-author">
                                <span className="topic-sidebar-avatar">{post.author.avatar}</span>
                                <div>
                                    <div className="topic-sidebar-author-name">{post.author.name}</div>
                                    <div className="topic-sidebar-author-role">Engineer & Writer</div>
                                </div>
                            </div>
                            <p className="topic-sidebar-bio">
                                Building KnowMoreIRL to help engineers learn how technology actually works.
                            </p>
                            <button className="blog-follow-btn">Follow on X</button>
                        </div>

                        {/* Newsletter */}
                        <div className="topic-sidebar-card topic-sidebar-newsletter">
                            <h4 className="topic-newsletter-title">Stay Updated</h4>
                            <p className="topic-newsletter-text">Get new articles delivered to your inbox.</p>
                            <input
                                type="email"
                                placeholder="your@email.com"
                                className="topic-newsletter-input"
                            />
                            <button className="topic-newsletter-btn">Subscribe</button>
                        </div>

                        {/* Table of Contents */}
                        <div className="topic-sidebar-card">
                            <h4 className="topic-sidebar-title">In This Article</h4>
                            <ul className="topic-toc-list">
                                <li><a href="#"><span className="topic-toc-bullet">•</span> Introduction</a></li>
                                <li><a href="#"><span className="topic-toc-bullet">•</span> Key Concepts</a></li>
                                <li><a href="#"><span className="topic-toc-bullet">•</span> Implementation</a></li>
                                <li><a href="#"><span className="topic-toc-bullet">•</span> Best Practices</a></li>
                                <li><a href="#"><span className="topic-toc-bullet">•</span> Conclusion</a></li>
                            </ul>
                        </div>
                    </aside>
                </div>

                {/* Related Posts */}
                {relatedPosts.length > 0 && (
                    <section className="blog-related-section">
                        <h2 className="blog-related-title">Related Articles</h2>
                        <div className="blog-related-grid">
                            {relatedPosts.map((relatedPost) => (
                                <Link
                                    href={`/blog/${relatedPost.id}`}
                                    key={relatedPost.id}
                                    className="blog-related-card"
                                >
                                    <div className="blog-related-image" style={{ background: relatedPost.image }}>
                                        <span className="blog-related-time">{relatedPost.readTime}</span>
                                    </div>
                                    <h3 className="blog-related-card-title">{relatedPost.title}</h3>
                                    <p className="blog-related-excerpt">{relatedPost.excerpt}</p>
                                </Link>
                            ))}
                        </div>
                    </section>
                )}

                {/* Back to Home */}
                <div className="topic-back-home">
                    <Link href="/" className="topic-back-btn">← Back to Home</Link>
                </div>
            </main>

            {/* Footer */}
            <footer className="topic-footer">
                <div className="container">
                    <p>© 2026 KnowMoreIRL. Built by engineers, for engineers.</p>
                </div>
            </footer>
        </div>
    );
}
