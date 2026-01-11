"use client";

import React, { useState } from 'react';
import { useAuth } from '../../context/AuthContext';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import '../style.css';

export default function SignupPage() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const { login } = useAuth();
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            const res = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, password }),
            });

            const data = await res.json();

            if (res.ok) {
                login(data.token);
                router.push('/');
            } else {
                setError(data.msg || 'Signup failed');
            }
        } catch (err) {
            setError('Something went wrong');
        }
    };

    return (
        <div className="site-wrapper coming-soon-page">
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

            <div className="coming-soon-content">
                <div className="auth-box">
                    <h2 className="auth-title">Create Account</h2>
                    <p className="auth-subtitle">Join the KnowMoreIRL community</p>

                    {error && <div className="auth-error">{error}</div>}

                    <form onSubmit={handleSubmit} className="auth-form">
                        <div className="auth-field">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                placeholder="Your name"
                                required
                            />
                        </div>
                        <div className="auth-field">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="you@example.com"
                                required
                            />
                        </div>
                        <div className="auth-field">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                placeholder="••••••••"
                                required
                            />
                        </div>
                        <button type="submit" className="auth-submit">
                            Create Account
                        </button>
                    </form>

                    <p className="auth-switch">
                        Already have an account? <Link href="/login">Sign in</Link>
                    </p>
                </div>
            </div>

            {/* Footer */}
            <footer className="topic-footer">
                <div className="container">
                    <p>© 2026 KnowMoreIRL. Built by engineers, for engineers.</p>
                </div>
            </footer>
        </div>
    );
}
