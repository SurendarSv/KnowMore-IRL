import Link from 'next/link';
import { blogPosts } from '../../../data/content';
import { notFound } from 'next/navigation';

export function generateStaticParams() {
    return blogPosts.map((post) => ({
        id: post.id.toString(),
    }));
}

export default async function BlogPostPage({
    params,
}: {
    params: Promise<{ id: string }>
}) {
    const { id } = await params;
    const post = blogPosts.find((p) => p.id.toString() === id);

    if (!post) {
        notFound();
    }

    return (
        <div className="site-wrapper min-h-screen p-8">
            <div className="container mx-auto max-w-4xl">
                <Link
                    href="/"
                    className="text-orange hover:opacity-80 mb-8 inline-block font-medium"
                >
                    ← Back to Home
                </Link>

                <article className="bg-[#1a1a1a] rounded-xl p-8 md:p-12 border border-white/5 shadow-2xl">
                    <header className="mb-8 border-b border-white/10 pb-8">
                        <div className="flex items-center gap-3 mb-4">
                            <span className="text-xs font-bold px-3 py-1 rounded-full bg-white/10 text-white/70 uppercase tracking-wider">
                                {post.category}
                            </span>
                            <span className="text-xs text-white/40">•</span>
                            <span className="text-xs text-white/40">{post.readTime}</span>
                        </div>

                        <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight">
                            {post.title}
                        </h1>

                        <div className="flex items-center gap-4">
                            <span className="text-2xl">{post.author.avatar}</span>
                            <div>
                                <div className="font-medium text-white">{post.author.name}</div>
                                <div className="text-sm text-white/50">{post.date}</div>
                            </div>
                        </div>
                    </header>

                    <div className="prose prose-invert prose-lg max-w-none">
                        {/* Simple whitespace handling for now. 
                    In a real app, use react-markdown or similar. */}
                        <div className="whitespace-pre-wrap font-light opacity-90 leading-relaxed">
                            {post.content}
                        </div>
                    </div>
                </article>
            </div>
        </div>
    );
}
