'use client';  // Cần vì dùng useState (React hook)
import { useState, useEffect } from 'react';
import styles from './Navbar.module.css';

const navLinks = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    // Khi cuộn xuống, navbar đổi background
    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
            <div className={styles.container}>
                <a href="#hero" className={styles.logo}>
                    {'<Huy />'}
                </a>
                <ul className={styles.links}>
                    {navLinks.map((link) => (
                        <li key={link.href}>
                            <a href={link.href}>{link.label}</a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
}
