import styles from './About.module.css';

// Dữ liệu skills — sửa ở đây khi cần
const skillGroups = [
    {
        category: 'Languages',
        skills: ['C/C++', 'C#', 'GDScript'],
    },
    {
        category: 'Game Engines',
        skills: ['Unity', 'Godot'],
    },
    {
        category: 'Frameworks',
        skills: ['Unity Netcode', 'LiteNetLib', 'DOTween', 'Ink'],
    },
    {
        category: 'Tools',
        skills: ['Git', 'Rider', 'VSCode', 'Linux'],
    },
];

export default function About() {
    return (
        <section id="about" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 className="section-title">Skills & About</h2>
            <div className={styles.grid}>
                {skillGroups.map((group) => (
                    <div key={group.category} className={styles.card}>
                        <h3 className={styles.category}>{group.category}</h3>
                        <div className={styles.tags}>
                            {group.skills.map((skill) => (
                                <span key={skill} className={styles.tag}>{skill}</span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
