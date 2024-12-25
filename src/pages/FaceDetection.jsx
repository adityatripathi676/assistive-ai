import React from 'react';
import Card from '../components/ui/Card';
import PageHeader from '../components/layout/PageHeader';
import GradientText from '../components/ui/GradientText';

function FaceDetection() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Face Detection"
        subtitle="Advanced facial recognition and analysis"
      />
      
      <Card className="max-w-2xl mx-auto p-6 sm:p-8 text-center">
        <GradientText as="h2" className="text-xl sm:text-2xl font-bold mb-4">
          Coming Soon
        </GradientText>
        <p className="text-gray-400">
          We're working on bringing you state-of-the-art face detection capabilities.
          Stay tuned for updates!
        </p>
      </Card>
    </div>
  );
}

export default FaceDetection;