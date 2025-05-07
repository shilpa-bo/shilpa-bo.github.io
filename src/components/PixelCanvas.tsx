// PixelCanvas.tsx
import { useEffect, useRef } from 'react';

const cellSize = 20;

export default function PixelCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const width = window.innerWidth;
    const height = window.innerHeight;
    canvas.width = width;
    canvas.height = height;

    // Optional: draw grid lines initially
    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        ctx.strokeStyle = '#eee';
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((e.clientX - rect.left) / cellSize) * cellSize;
      const y = Math.floor((e.clientY - rect.top) / cellSize) * cellSize;

      ctx.fillStyle = '#EEF44D'; // draw color
      ctx.fillRect(x, y, cellSize, cellSize);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="pixel-canvas"
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 0,
        pointerEvents: 'none', // allows clicks through to your desktop
      }}
    />
  );
}
