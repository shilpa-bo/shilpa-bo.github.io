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

    // Draw grid lines initially
    for (let x = 0; x < width; x += cellSize) {
      for (let y = 0; y < height; y += cellSize) {
        ctx.strokeStyle = '#eee';
        ctx.strokeRect(x, y, cellSize, cellSize);
      }
    }

    const draw = (x: number, y: number) => {
      ctx.fillStyle = '#EEF44D';
      const gridX = Math.floor(x / cellSize) * cellSize;
      const gridY = Math.floor(y / cellSize) * cellSize;
      ctx.fillRect(gridX, gridY, cellSize, cellSize);
    };

    const handleMouseMove = (e: MouseEvent) => {
      draw(e.clientX, e.clientY);
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
        width: '100vw',
        height: '100vh',
        zIndex: 0,
        pointerEvents: 'none', // allows interaction with underlying UI
      }}
    />
  );
}
