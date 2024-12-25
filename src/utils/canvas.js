export function drawDetections(canvas, video, predictions) {
  if (!canvas || !video || !predictions) return;

  const ctx = canvas.getContext('2d');
  
  canvas.width = video.videoWidth;
  canvas.height = video.videoHeight;
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  predictions.forEach(prediction => {
    const [x, y, width, height] = prediction.bbox;

    // Draw glowing box
    ctx.strokeStyle = '#60A5FA';
    ctx.lineWidth = 2;
    ctx.shadowColor = '#60A5FA';
    ctx.shadowBlur = 15;
    ctx.strokeRect(x, y, width, height);

    // Draw gradient background for label
    const label = `${prediction.class} ${Math.round(prediction.score * 100)}%`;
    ctx.font = 'bold 16px Inter, sans-serif';
    const labelWidth = ctx.measureText(label).width + 16;
    
    const gradient = ctx.createLinearGradient(x, y, x + labelWidth, y);
    gradient.addColorStop(0, 'rgba(96, 165, 250, 0.9)');
    gradient.addColorStop(1, 'rgba(167, 139, 250, 0.9)');
    
    ctx.fillStyle = gradient;
    ctx.fillRect(x, y - 30, labelWidth, 24);

    // Draw label text
    ctx.fillStyle = '#FFFFFF';
    ctx.fillText(label, x + 8, y - 12);
  });
}