export const initializeCamera = async (constraints) => {
  try {
    return await navigator.mediaDevices.getUserMedia(constraints);
  } catch (error) {
    console.error('Error accessing camera:', error);
    throw error;
  }
};

export const stopMediaStream = (stream) => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop());
  }
};

export const captureImageFromVideo = (video, quality = 0.8) => {
  const canvas = document.createElement('canvas');
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  canvas.getContext('2d').drawImage(video, 0, 0);
  
  return new Promise((resolve) => {
    canvas.toBlob(
      (blob) => resolve(blob),
      'image/jpeg',
      quality
    );
  });
};