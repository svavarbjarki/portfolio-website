import ProjectDetail from '../../components/ProjectDetail';
import { projects, getProjectBySlug } from '../../data/portfolio';

export default function ProjectPage({ project }) {
  return <ProjectDetail project={project} />;
}

export async function getStaticPaths() {
  return {
    paths: projects.filter((p) => p.slug).map((p) => ({ params: { slug: p.slug } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const project = getProjectBySlug(params.slug);
  if (!project) return { notFound: true };
  return { props: { project } };
}
