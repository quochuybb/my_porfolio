import projects from '@/data/projects.json';
import ProjectCard from './ProjectCard';
import styles from './Projects.module.css';

export default function Projects() {
    return (
        <section id="projects" className="container" style={{ padding: 'var(--section-padding)' }}>
            <h2 className="section-title">Projects</h2>
            <div className={styles.grid}>
                {projects.map((project) => (
                    <ProjectCard key={project.id} project={project} />
                ))}
            </div>
        </section>
    );
}
