import styles from './Experience.module.css';

const experiences = [
    {
        title: 'F-Code — Leader Game Crew',
        period: 'Dec 2023 – Present',
        description: 'Lead and mentored a 4-member team in Unity/C++',
    },
    {
        title: 'FPT University - HCMC Campus',
        period: 'Sep 2023 – Present',
        description: 'Bachelor of Software Engineering',
    },
];

export default function Experience() {
    return (
        <section id="experience" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 className="section-title">Experience</h2>
            <div className={styles.timeline}>
                {experiences.map((exp, i) => (
                    <div key={i} className={styles.item}>
                        <div className={styles.dot}></div>
                        <div className={styles.content}>
                            <h3>{exp.title}</h3>
                            <span className={styles.period}>{exp.period}</span>
                            <p>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
