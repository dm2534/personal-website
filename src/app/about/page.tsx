export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
        About Me
      </h1>
      <div className="space-y-6 text-gray-300">
        <p>
          As a GCP Solution Architect & AI Engineer, I specialize in designing and deploying scalable cloud infrastructure on Google Cloud Platform. With over 5 years of experience, I've helped enterprises build robust systems that integrate machine learning and production engineering.
        </p>
        <h2 className="text-2xl font-semibold text-purple-400">Professional Background</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Architected AI pipelines for enterprise clients, reducing deployment time by 40%</li>
          <li>Led GCP migrations for Fortune 500 companies</li>
          <li>Developed custom ML models for predictive analytics</li>
          <li>Certified Google Cloud Professional Cloud Architect</li>
        </ul>
        <h2 className="text-2xl font-semibold text-purple-400">Mission</h2>
        <p>
          My mission is to bridge the gap between cutting-edge AI research and practical, scalable engineering solutions. I believe in creating technology that not only performs but also adapts and grows with business needs.
        </p>
      </div>
    </div>
  );
}