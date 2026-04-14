import styles from './ProjectCard.module.css';

export default function ProjectCard({ project }) {
    return (
        <div className={styles.card}>
            {/* Ảnh project */}
            <div className={styles.imageWrapper}>
                <img src={project.image} alt={project.title} className={styles.image} />
                <div className={styles.overlay}>
                    {project.demo && (
                        <a href={project.demo} target="_blank" rel="noopener noreferrer" className={styles.overlayLink}>
                            🎮 Demo
                        </a>
                    )}
                    {project.github && (
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className={styles.overlayLink}>
                            💻 GitHub
                        </a>
                    )}
                </div>
            </div>

            {/* Thông tin */}
            <div className={styles.content}>
                <div className={styles.header}>
                    <h3 className={styles.title}>{project.title}</h3>
                    <span className={styles.role}>{project.role}</span>
                </div>
                <p className={styles.date}>{project.date}</p>
                <p className={styles.description}>{project.description}</p>

                {/* Highlights */}
                <ul className={styles.highlights}>
                    {project.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </ul>

                {/* Tech tags */}
                <div className={styles.techTags}>
                    {project.tech.map((t) => (
                        <span key={t} className={styles.techTag}>{t}</span>
                    ))}
                </div>
            </div>
        </div>
    );
}
