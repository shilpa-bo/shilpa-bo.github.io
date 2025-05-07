import PixelCanvas from './components/PixelCanvas';

function App2() {
  return (
    <>
      <PixelCanvas />
      <div style={{ position: 'relative', zIndex: 0 }}>
        <h1 style={{ color: 'black' }}>Hello</h1>
      </div>
    </>
  );
}

export default App2;
