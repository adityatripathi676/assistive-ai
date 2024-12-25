import React from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/ui/Card';
import GradientText from '../components/ui/GradientText';
import PageHeader from '../components/layout/PageHeader';

function Home() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      <PageHeader
        title="AI Vision Hub"
        subtitle="Explore the power of computer vision with our advanced AI tools"
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <FeatureCard
          title="Object Detection"
          description="Detect and identify multiple objects in real-time"
          path="/object-detection"
          gradient="from-blue-500 to-cyan-500"
        />
        <FeatureCard
          title="Face Detection"
          description="Detect and analyze faces with advanced AI"
          path="/face-detection"
          gradient="from-purple-500 to-pink-500"
        />
        <FeatureCard
          title="Image Classification"
          description="Classify images into thousands of categories"
          path="/image-classification"
          gradient="from-green-500 to-emerald-500"
        />
      </div>
    </div>
  );
}

function FeatureCard({ title, description, path, gradient }) {
  return (
    <Link
      to={path}
      className="group transform hover:scale-105 transition-all duration-300"
    >
      <Card className="h-full">
        <div className={`h-2 bg-gradient-to-r ${gradient}`} />
        <div className="p-6">
          <GradientText as="h3" className="text-lg sm:text-xl font-semibold mb-2">
            {title}
          </GradientText>
          <p className="text-gray-400 text-sm sm:text-base">{description}</p>
        </div>
      </Card>
    </Link>
  );
}

export default Home;