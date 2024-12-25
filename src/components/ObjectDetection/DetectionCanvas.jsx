import React, { useRef, useEffect } from 'react';
import { drawDetections } from '../../utils/canvas';

function DetectionCanvas({ videoRef, predictions }) {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current && videoRef.current) {
      drawDetections(canvasRef.current, videoRef.current, predictions);
    }
  }, [predictions, videoRef]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full animate-fade-in"
    />
  );
}

export default DetectionCanvas;