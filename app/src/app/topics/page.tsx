import Link from 'next/link';
import { blogPosts } from '../../data/content';

export default async function TopicPage({
    searchParams,
}: {
    searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}) {
    const { topic } = await searchParams;
    const topicTitle = Array.isArray(topic) ? topic[0] : topic;

    return (
        <div className="site-wrapper min-h-screen p-8">
            <div className="container mx-auto">
                <Link
                    href="/"
                    className="text-orange hover:opacity-80 mb-8 inline-block font-medium"
                >
                    ← Back to Home
                </Link>

                <header className="mb-12">
                    <h1 className="text-4xl font-bold mb-4">
                        Topic: <span className="text-orange">{topicTitle || 'All Topics'}</span>
                    </h1>
                    <p className="text-xl opacity-80">
                        Exploring practical engineering concepts in {topicTitle}.
                    </p>
                </header>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {blogPosts.map((post) => (
                        <Link
                            href={`/blog/${post.id}`}
                            key={post.id}
                            className="flex flex-col h-full no-underline transition-opacity hover:opacity-80"
                            style={{ color: 'inherit', textDecoration: 'none' }}
                        >
                            <div className="article-header">
                                <span className="article-tag">{post.category}</span>
                            </div>
                            <h3 className="text-xl font-bold mb-2">{post.title}</h3>
                            <p className="opacity-70 mb-4 text-sm line-clamp-3" style={{ color: 'var(--text-secondary)' }}>{post.excerpt}</p>
                            <div className="article-date flex items-center justify-between mt-auto">
                                <div className="flex items-center gap-2">
                                    <span>{post.author.avatar}</span>
                                    <span className="text-sm">{post.author.name}</span>
                                </div>
                                <span className="text-xs opacity-60 ml-4">{post.readTime}</span>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
