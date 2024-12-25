import React from 'react';
import Card from '../components/ui/Card';
import PageHeader from '../components/layout/PageHeader';
import GradientText from '../components/ui/GradientText';

function ImageClassification() {
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <PageHeader
        title="Image Classification"
        subtitle="Classify images with advanced AI models"
      />
      
      <Card className="max-w-2xl mx-auto p-6 sm:p-8 text-center">
        <GradientText as="h2" className="text-xl sm:text-2xl font-bold mb-4">
          Coming Soon
        </GradientText>
        <p className="text-gray-400">
          Our team is working on implementing powerful image classification features.
          Check back soon!
        </p>
      </Card>
    </div>
  );
}

export default ImageClassification;