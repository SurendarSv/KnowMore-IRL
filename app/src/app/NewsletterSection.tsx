'use client';

import { useState, FormEvent } from 'react';

export default function NewsletterSection() {
    const [email, setEmail] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubmitted(true);
            setEmail('');
            setTimeout(() => setIsSubmitted(false), 3000);
        }
    };

    return (
        <section className="newsletter" id="newsletter">
            <div className="container">
                <div className="newsletter-wrapper reveal">
                    <div className="newsletter-content">
                        <span className="section-tag">Stay Ahead</span>
                        <h2 className="section-title">Get Weekly DSA Tips & Interview Insights</h2>
                        <p className="newsletter-description">
                            Receive curated problem sets, interview tips, and success stories directly in your inbox.
                            Join thousands of aspiring engineers leveling up their skills.
                        </p>
                    </div>
                    <form className="newsletter-form" onSubmit={handleSubmit}>
                        <div className="input-wrapper">
                            <input
                                type="email"
                                placeholder="Enter your email address"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                            <button type="submit" className="btn-primary">
                                {isSubmitted ? '✓ Subscribed!' : 'Subscribe'}
                            </button>
                        </div>
                        <p className="newsletter-privacy">
                            🔒 We respect your privacy. Unsubscribe at any time.
                        </p>
                    </form>
                </div>
            </div>
        </section>
    );
}
