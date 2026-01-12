'use client';

import Link from 'next/link';
import { blogPosts, topics, topicArticles } from '../../data/content';
import { use } from 'react';
import '../style.css';

export default function TopicPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const params = use(searchParams);
    const topicTitle = Array.isArray(params.topic) ? params.topic[0] : params.topic;

    // Get article for this topic if it exists
    const article = topicTitle ? topicArticles[topicTitle] : null;

    // Get all topics for sidebar
    const allTopics = [
        ...topics.ai.slice(0, 6),
        ...topics.devops.slice(0, 6)
    ];

    // If we have an article for this topic, show the full article view
    if (article) {
        return (
            <div className="site-wrapper">
                {/* Navigation Bar */}
                <nav className="topic-nav">
                    <div className="container topic-nav-inner">
                        <Link href="/" className="topic-brand">
                            <span className="topic-brand-text">
                                <span className="topic-brand-know">KnowMore</span>→<span className="topic-brand-irl">IRL</span>
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
                        <Link href="/#what-we-cover">Topics</Link>
                        <span className="topic-breadcrumb-sep">›</span>
                        <span className="topic-breadcrumb-current">{article.category}</span>
                    </div>

                    <div className="topic-layout">
                        {/* Main Content */}
                        <article className="topic-article">
                            {/* Category & Meta */}
                            <div className="topic-meta">
                                <span className="topic-category-badge">{article.category}</span>
                                <span className="topic-meta-dot">•</span>
                                <span className="topic-read-time">{article.readTime}</span>
                            </div>

                            {/* Title */}
                            <h1 className="topic-title">{article.title}</h1>

                            {/* Excerpt */}
                            <p className="topic-excerpt">{article.excerpt}</p>

                            {/* Author & Date Bar */}
                            <div className="topic-author-bar">
                                <div className="topic-author-info">
                                    <span className="topic-author-avatar">{article.author.avatar}</span>
                                    <div>
                                        <div className="topic-author-name">{article.author.name}</div>
                                        <div className="topic-author-date">{article.date}</div>
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

                            {/* Highlights Box */}
                            <div className="topic-highlights-box">
                                <h3 className="topic-highlights-title">
                                    <span>⚡</span> What You'll Learn
                                </h3>
                                <ul className="topic-highlights-list">
                                    {article.highlights.map((highlight, idx) => (
                                        <li key={idx}>
                                            <span className="topic-highlight-arrow">→</span>
                                            <span>{highlight}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Article Sections */}
                            <div className="topic-sections">
                                {article.sections.map((section, idx) => (
                                    <section key={idx} className="topic-section">
                                        <h2 className="topic-section-heading">{section.heading}</h2>
                                        <div className="topic-section-content">
                                            {section.content.split('\n\n').map((paragraph, pIdx) => (
                                                <p key={pIdx}>
                                                    {paragraph.split('**').map((part, partIdx) =>
                                                        partIdx % 2 === 1
                                                            ? <strong key={partIdx}>{part}</strong>
                                                            : part
                                                    )}
                                                </p>
                                            ))}
                                        </div>
                                    </section>
                                ))}
                            </div>

                            {/* Related Topics */}
                            {article.relatedTopics.length > 0 && (
                                <div className="topic-related">
                                    <h3 className="topic-related-title">Continue Learning</h3>
                                    <div className="topic-related-links">
                                        {article.relatedTopics.map((relatedTopic, idx) => (
                                            <Link
                                                key={idx}
                                                href={`/topics?topic=${encodeURIComponent(relatedTopic)}`}
                                                className="topic-related-link"
                                            >
                                                {relatedTopic} →
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>

                        {/* Sidebar */}
                        <aside className="topic-sidebar">
                            {/* Table of Contents */}
                            <div className="topic-sidebar-card">
                                <h4 className="topic-sidebar-title">In This Article</h4>
                                <ul className="topic-toc-list">
                                    {article.sections.map((section, idx) => (
                                        <li key={idx}>
                                            <a href={`#section-${idx}`}>
                                                <span className="topic-toc-bullet">•</span>
                                                {section.heading}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            {/* Author Card */}
                            <div className="topic-sidebar-card">
                                <h4 className="topic-sidebar-title">About the Author</h4>
                                <div className="topic-sidebar-author">
                                    <span className="topic-sidebar-avatar">{article.author.avatar}</span>
                                    <div>
                                        <div className="topic-sidebar-author-name">{article.author.name}</div>
                                        <div className="topic-sidebar-author-role">Engineer & Writer</div>
                                    </div>
                                </div>
                                <p className="topic-sidebar-bio">
                                    Building KnowMoreIRL to help engineers learn how technology actually works.
                                </p>
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

                            {/* More Topics */}
                            <div className="topic-sidebar-card">
                                <h4 className="topic-sidebar-title">Explore More</h4>
                                <div className="topic-explore-tags">
                                    {allTopics.slice(0, 8).map((topic, idx) => (
                                        <Link
                                            href={`/topics?topic=${encodeURIComponent(topic)}`}
                                            key={idx}
                                            className="topic-explore-tag"
                                        >
                                            {topic}
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </aside>
                    </div>

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

    // Fallback: Show topic list if no article exists
    return (
        <div className="site-wrapper">
            {/* Navigation Bar */}
            <nav className="topic-nav">
                <div className="container topic-nav-inner">
                    <Link href="/" className="topic-brand">
                        <span className="topic-brand-text">
                            <span className="topic-brand-know">KnowMore</span>→<span className="topic-brand-irl">IRL</span>
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
                    <Link href="/#what-we-cover">Topics</Link>
                    {topicTitle && (
                        <>
                            <span className="topic-breadcrumb-sep">›</span>
                            <span className="topic-breadcrumb-current">{topicTitle}</span>
                        </>
                    )}
                </div>

                <div className="topic-layout">
                    {/* Main Content */}
                    <div className="topic-article">
                        {/* Header */}
                        <header className="topic-coming-header">
                            <span className="topic-category-badge">Topic</span>
                            <h1 className="topic-title">{topicTitle || 'All Topics'}</h1>
                            <p className="topic-excerpt">
                                {topicTitle
                                    ? `Exploring ${topicTitle} — practical concepts, real-world patterns, and honest explanations.`
                                    : 'Browse all topics covered on KnowMoreIRL.'
                                }
                            </p>
                        </header>

                        {/* Coming Soon */}
                        <div className="topic-coming-soon">
                            <span className="topic-coming-icon">📝</span>
                            <h3>Content Coming Soon</h3>
                            <p>We're working on a detailed guide for this topic. In the meantime, check out our existing articles.</p>
                            <Link href="/#blog" className="topic-browse-btn">Browse Articles →</Link>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <aside className="topic-sidebar">
                        {/* Explore Topics */}
                        <div className="topic-sidebar-card">
                            <h4 className="topic-sidebar-title">Explore Topics</h4>
                            <div className="topic-explore-tags">
                                {allTopics.map((topic, idx) => (
                                    <Link
                                        href={`/topics?topic=${encodeURIComponent(topic)}`}
                                        key={idx}
                                        className={`topic-explore-tag ${topicArticles[topic] ? 'has-content' : ''}`}
                                    >
                                        {topic}
                                    </Link>
                                ))}
                            </div>
                            <p className="topic-explore-hint">
                                <span className="topic-hint-dot">●</span> Topics with articles available
                            </p>
                        </div>

                        {/* About */}
                        <div className="topic-sidebar-card">
                            <h4 className="topic-sidebar-title">About KnowMoreIRL</h4>
                            <p className="topic-sidebar-bio">
                                We help engineers learn technology as it actually works — not as it's packaged in courses.
                            </p>
                            <Link href="/" className="topic-learn-more">Learn more →</Link>
                        </div>
                    </aside>
                </div>

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
