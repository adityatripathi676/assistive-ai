import './styles/index.css';
import { setupCamera } from './components/camera.js';

document.querySelector('#app').innerHTML = `
  <div class="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white p-8">
    <div class="max-w-md mx-auto">
      <div class="text-center mb-8">
        <h1 class="text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          Smart Camera
        </h1>
        <p class="text-gray-400 mt-2">Capture and analyze images instantly</p>
      </div>
      
      <div class="camera-container aspect-video mb-6">
        <video id="camera" autoplay playsinline class="w-full h-full object-cover"></video>
        <div id="overlay" class="camera-overlay hidden">
          <img id="captured-image" class="max-w-full max-h-full object-contain" />
        </div>
      </div>

      <div class="flex flex-col gap-4">
        <div id="camera-controls" class="flex justify-center gap-4">
          <button id="start-camera" class="btn btn-primary slide-in">
            Start Camera
          </button>
        </div>
        
        <div id="capture-controls" class="flex justify-center gap-4 hidden">
          <button id="capture" class="btn btn-primary">
            Capture
          </button>
          <button id="stop-camera" class="btn btn-destructive">
            Stop
          </button>
        </div>

        <div id="analysis-controls" class="flex flex-col items-center gap-4 hidden">
          <button id="analyze" class="btn btn-primary w-full">
            Analyze Image
          </button>
          <button id="retake" class="btn btn-outline w-full">
            Take Another Photo
          </button>
        </div>

        <div id="result" class="text-center hidden">
          <div class="bg-gray-800/50 rounded-lg p-4 mt-4">
            <p id="result-text" class="text-lg font-medium"></p>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

setupCamera();