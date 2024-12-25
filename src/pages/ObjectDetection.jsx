import React, { useRef, useEffect, useState } from 'react';
import * as tf from '@tensorflow/tfjs';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import { useCamera } from '../hooks/useCamera';
import DetectionCanvas from '../components/ObjectDetection/DetectionCanvas';
import DetectionList from '../components/ObjectDetection/DetectionList';
import Button from '../components/ui/Button';
import Card from '../components/ui/Card';
import PageHeader from '../components/layout/PageHeader';

function ObjectDetection() {
  const videoRef = useRef(null);
  const [isModelLoading, setIsModelLoading] = useState(true);
  const [model, setModel] = useState(null);
  const [predictions, setPredictions] = useState([]);
  const { stream, startCamera, stopCamera } = useCamera();

  useEffect(() => {
    const initializeTF = async () => {
      try {
        await tf.ready();
        const loadedModel = await cocoSsd.load();
        setModel(loadedModel);
        setIsModelLoading(false);
      } catch (error) {
        console.error('Error loading model:', error);
      }
    };
    initializeTF();
  }, []);

  useEffect(() => {
    if (stream && videoRef.current) {
      videoRef.current.srcObject = stream;
    }
  }, [stream]);

  useEffect(() => {
    let animationFrame;
    const detectObjects = async () => {
      if (model && videoRef.current && videoRef.current.readyState === 4) {
        try {
          const predictions = await model.detect(videoRef.current);
          setPredictions(predictions);
          animationFrame = requestAnimationFrame(detectObjects);
        } catch (error) {
          console.error('Detection error:', error);
        }
      }
    };

    if (model && stream) {
      detectObjects();
    }

    return () => {
      if (animationFrame) {
        cancelAnimationFrame(animationFrame);
      }
    };
  }, [model, stream]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 min-h-screen">
      <PageHeader
        title="Real-time Object Detection"
        subtitle="Powered by TensorFlow.js and COCO-SSD"
      />

      {isModelLoading ? (
        <div className="flex items-center justify-center p-8">
          <Card className="p-6 sm:p-8 animate-pulse">
            <div className="flex items-center space-x-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 animate-spin" />
              <p className="text-lg sm:text-xl text-white">Loading AI model...</p>
            </div>
          </Card>
        </div>
      ) : (
        <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-700">
          <div className="relative aspect-video rounded-2xl overflow-hidden 
                        bg-gradient-to-r from-blue-500/10 to-purple-500/10 backdrop-blur-sm
                        border border-white/10 shadow-2xl">
            <video
              ref={videoRef}
              autoPlay
              playsInline
              muted
              className="absolute inset-0 w-full h-full object-cover"
            />
            <DetectionCanvas videoRef={videoRef} predictions={predictions} />
          </div>

          <div className="flex flex-wrap justify-center gap-4">
            <Button onClick={startCamera} disabled={!!stream}>
              Start Camera
            </Button>
            <Button onClick={stopCamera} disabled={!stream} variant="destructive">
              Stop Camera
            </Button>
          </div>

          <Card className="p-6">
            <h2 className="text-xl sm:text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 
                          bg-clip-text text-transparent mb-6">
              Detected Objects
            </h2>
            <DetectionList predictions={predictions} />
          </Card>
        </div>
      )}
    </div>
  );
}

export default ObjectDetection;