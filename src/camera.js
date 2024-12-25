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
      stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'user',
          width: { ideal: 1280 },
          height: { ideal: 720 }
        } 
      });
      elements.video.srcObject = stream;
      elements.cameraControls.classList.add('hidden');
      elements.captureControls.classList.remove('hidden');
    } catch (err) {
      console.error('Error accessing camera:', err);
    }
  };

  const stopCamera = () => {
    if (stream) {
      stream.getTracks().forEach(track => track.stop());
      elements.video.srcObject = null;
      stream = null;
    }
    elements.cameraControls.classList.remove('hidden');
    elements.captureControls.classList.add('hidden');
  };

  const captureImage = () => {
    const canvas = document.createElement('canvas');
    canvas.width = elements.video.videoWidth;
    canvas.height = elements.video.videoHeight;
    canvas.getContext('2d').drawImage(elements.video, 0, 0);
    
    canvas.toBlob(blob => {
      capturedImage = blob;
      elements.capturedImg.src = URL.createObjectURL(blob);
      elements.overlay.classList.remove('hidden');
      elements.captureControls.classList.add('hidden');
      elements.analysisControls.classList.remove('hidden');
      stopCamera();
    }, 'image/jpeg', 0.8);
  };

  const analyzeImage = () => {
    elements.analyzeBtn.disabled = true;
    elements.analyzeBtn.innerHTML = '<span class="pulse">Analyzing...</span>';
    
    // Simulated analysis with random result
    setTimeout(() => {
      const detected = Math.random() > 0.5;
      elements.result.classList.remove('hidden');
      elements.resultText.textContent = detected 
        ? '✨ Person detected in the image!'
        : '🤔 No person detected in the image';
      elements.resultText.classList.add('fade-in');
      elements.analyzeBtn.disabled = false;
      elements.analyzeBtn.textContent = 'Analysis Complete';
    }, 2000);
  };

  const retake = () => {
    elements.overlay.classList.add('hidden');
    elements.result.classList.add('hidden');
    elements.analysisControls.classList.add('hidden');
    elements.cameraControls.classList.remove('hidden');
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