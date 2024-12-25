import React from 'react';
import Card from '../ui/Card';
import GradientText from '../ui/GradientText';

function DetectionList({ predictions }) {
  if (predictions.length === 0) {
    return (
      <Card className="text-center p-6 sm:p-8">
        <p className="text-gray-400">No objects detected</p>
      </Card>
    );
  }

  return (
    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
      {predictions.map((pred, idx) => (
        <Card
          key={idx}
          className="p-4 transform hover:scale-105 transition-all duration-300
                   animate-in slide-in-from-bottom-4 fade-in"
          style={{ animationDelay: `${idx * 50}ms` }}
        >
          <div className="flex flex-col gap-2">
            <GradientText className="text-base sm:text-lg font-medium">
              {pred.class}
            </GradientText>
            <div className="w-full bg-gray-700/50 rounded-full h-2">
              <div 
                className="bg-gradient-to-r from-blue-400 to-purple-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${Math.round(pred.score * 100)}%` }}
              />
            </div>
            <span className="text-sm text-gray-400">
              {Math.round(pred.score * 100)}% confidence
            </span>
          </div>
        </Card>
      ))}
    </div>
  );
}

export default DetectionList;