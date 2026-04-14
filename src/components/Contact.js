import styles from './Contact.module.css';

const contactLinks = [
    { icon: '📞', label: '(+84) 978-522-728', href: 'tel:+84978522728' },
    { icon: '✉️', label: 'nqhsktt1@gmail.com', href: 'mailto:nqhsktt1@gmail.com' },
    { icon: '🔗', label: 'LinkedIn', href: 'https://linkedin.com/in/huyico' },
    { icon: '💻', label: 'GitHub', href: 'https://github.com/quochuybb' },
];

export default function Contact() {
    return (
        <section id="contact" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 className="section-title">Get In Touch</h2>
            <p className={styles.subtitle}>
                I'm currently looking for new opportunities. Feel free to reach out!
            </p>
            <div className={styles.links}>
                {contactLinks.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noopener noreferrer" className={styles.link}>
                        <span className={styles.icon}>{link.icon}</span>
                        <span>{link.label}</span>
                    </a>
                ))}
            </div>
        </section>
    );
}
