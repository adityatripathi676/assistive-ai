import { initializeCamera, stopMediaStream, captureImageFromVideo } from '../utils/camera.js';
import { toggleElement, setElementText } from '../utils/dom.js';

export function setupCamera() {
  let stream = null;
  let capturedImage = null;
  
  const elements = {
    video: document.querySelector('#camera'),
    overlay: document.querySelector('#overlay'),
    capturedImg: document.querySelector('#captured-image'),
    startBtn: document.querySelector('#start-camera'),
    stopBtn: document.querySelector('#stop-camera'),
    captureBtn: document.querySelector('#capture'),
    analyzeBtn: document.querySelector('#analyze'),
    retakeBtn: document.querySelector('#retake'),
    result: document.querySelector('#result'),
    resultText: document.querySelector('#result-text'),
    cameraControls: document.querySelector('#camera-controls'),
    captureControls: document.querySelector('#capture-controls'),
    analysisControls: document.querySelector('#analysis-controls'),
  };

  const startCamera = async () => {
    try {
      stream = await initializeCamera({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      elements.video.srcObject = stream;
      toggleElement(elements.cameraControls, false);
      toggleElement(elements.captureControls, true);
    } catch (err) {
      console.error('Error starting camera:', err);
    }
  };

  const stopCamera = () => {
    stopMediaStream(stream);
    elements.video.srcObject = null;
    stream = null;
    toggleElement(elements.cameraControls, true);
    toggleElement(elements.captureControls, false);
  };

  const captureImage = async () => {
    try {
      const blob = await captureImageFromVideo(elements.video);
      capturedImage = blob;
      elements.capturedImg.src = URL.createObjectURL(blob);
      toggleElement(elements.overlay, true);
      toggleElement(elements.captureControls, false);
      toggleElement(elements.analysisControls, true);
      stopCamera();
    } catch (err) {
      console.error('Error capturing image:', err);
    }
  };

  const analyzeImage = () => {
    elements.analyzeBtn.disabled = true;
    elements.analyzeBtn.innerHTML = '<span class="pulse">Analyzing...</span>';
    
    setTimeout(() => {
      const detected = Math.random() > 0.5;
      toggleElement(elements.result, true);
      setElementText(
        elements.resultText,
        detected ? '✨ Person detected in the image!' : '🤔 No person detected in the image'
      );
      elements.resultText.classList.add('fade-in');
      elements.analyzeBtn.disabled = false;
      setElementText(elements.analyzeBtn, 'Analysis Complete');
    }, 2000);
  };

  const retake = () => {
    toggleElement(elements.overlay, false);
    toggleElement(elements.result, false);
    toggleElement(elements.analysisControls, false);
    toggleElement(elements.cameraControls, true);
    if (capturedImage) {
      URL.revokeObjectURL(elements.capturedImg.src);
      capturedImage = null;
    }
  };

  // Event Listeners
  elements.startBtn.addEventListener('click', startCamera);
  elements.stopBtn.addEventListener('click', stopCamera);
  elements.captureBtn.addEventListener('click', captureImage);
  elements.analyzeBtn.addEventListener('click', analyzeImage);
  elements.retakeBtn.addEventListener('click', retake);
}