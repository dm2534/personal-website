export default function Blog() {
  const posts = [
    {
      title: "Scaling AI Models on GCP: Best Practices",
      excerpt: "Learn how to efficiently scale machine learning models using Google Cloud's infrastructure.",
      date: "2024-05-01",
      link: "#"
    },
    {
      title: "Architecting Robust ML Pipelines",
      excerpt: "A deep dive into building reliable machine learning pipelines for production environments.",
      date: "2024-04-15",
      link: "#"
    },
    {
      title: "GCP Cost Optimization for AI Workloads",
      excerpt: "Strategies to reduce costs while maintaining performance for AI and ML projects.",
      date: "2024-03-20",
      link: "#"
    }
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
        Blog
      </h1>
      <div className="space-y-6">
        {posts.map((post, index) => (
          <article key={index} className="border-b border-purple-500/20 pb-6">
            <h2 className="text-2xl font-semibold mb-2 text-purple-400 hover:text-purple-300 transition-colors">
              <a href={post.link}>{post.title}</a>
            </h2>
            <p className="text-gray-300 mb-2">{post.excerpt}</p>
            <time className="text-sm text-gray-400">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  );
}