import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import ObjectDetection from './pages/ObjectDetection';
import FaceDetection from './pages/FaceDetection';
import ImageClassification from './pages/ImageClassification';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
        <Navbar />
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/object-detection" element={<ObjectDetection />} />
            <Route path="/face-detection" element={<FaceDetection />} />
            <Route path="/image-classification" element={<ImageClassification />} />
          </Routes>
        </main>
      </div>
    </Router>
    
  );
}

export default App;