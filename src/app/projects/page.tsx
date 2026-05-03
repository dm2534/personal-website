export default function Projects() {
  const projects = [
    {
      title: "Scalable AI Pipeline on GCP",
      description: "Designed and implemented an end-to-end ML pipeline using Vertex AI, BigQuery, and Cloud Functions.",
      tech: ["GCP", "Vertex AI", "BigQuery"],
      link: "#"
    },
    {
      title: "Enterprise Data Lake Migration",
      description: "Migrated legacy data systems to Google Cloud Storage and BigQuery, improving query performance by 60%.",
      tech: ["GCP", "BigQuery", "Dataflow"],
      link: "#"
    },
    {
      title: "Custom LLM Training Platform",
      description: "Built a platform for fine-tuning large language models on custom datasets using TPUs.",
      tech: ["GCP", "TPU", "TensorFlow"],
      link: "#"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
        Projects
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="bg-gray-800 p-6 rounded-lg border border-purple-500/20 hover:border-purple-500/50 transition-colors">
            <h3 className="text-xl font-semibold mb-2 text-purple-400">{project.title}</h3>
            <p className="text-gray-300 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-purple-500/20 text-purple-300 px-2 py-1 rounded text-sm">
                  {tech}
                </span>
              ))}
            </div>
            <a href={project.link} className="text-fuchsia-400 hover:text-fuchsia-300 transition-colors">
              View Project →
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}