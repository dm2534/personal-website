import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4">
      <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            GCP Solution Architect & AI Engineer
          </h1>
          <p className="text-lg text-gray-300">
            Deploying scalable infrastructure on Google Cloud, training enterprise AI models, and architecting robust solutions that bridge machine learning and production engineering.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">5+</div>
              <div className="text-sm text-gray-400">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-400">50+</div>
              <div className="text-sm text-gray-400">Projects Deployed</div>
            </div>
          </div>
          <Link href="/blog" className="inline-block bg-gradient-to-r from-purple-500 to-fuchsia-500 px-6 py-3 rounded-lg text-white font-semibold hover:opacity-90 transition-opacity">
            Read My Blog
          </Link>
        </div>
        <div className="flex justify-center">
          <Image
            src="/profile.jpg" // Add your profile image to public/
            alt="Profile"
            width={300}
            height={300}
            className="rounded-full border-4 border-purple-500/50"
          />
        </div>
      </div>
    </div>
  );
}
