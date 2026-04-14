import styles from './Hero.module.css';

export default function Hero() {
    return (
        <section id="hero" className={styles.hero}>
            <div className={styles.container}>
                {/* Hiệu ứng glow phía sau */}
                <div className={styles.glowOrb}></div>

                <p className={styles.greeting}>Hi, I'm</p>
                <h1 className={styles.name}>Nguyen Quoc Huy</h1>
                <h2 className={styles.title}>Unity Game Developer</h2>
                <p className={styles.description}>
                    Building robust gameplay systems and optimizing game performance.
                    Specializing in multiplayer networking and scalable game architecture.
                </p>
                <div className={styles.cta}>
                    <a href="#projects" className={styles.btnPrimary}>
                        View Projects
                    </a>
                    <a href="#contact" className={styles.btnSecondary}>
                        Contact Me
                    </a>
                </div>
            </div>
        </section>
    );
}
