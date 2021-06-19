function Shape({ color, shape }: { color: string; shape: string }) {
  return (
    <div>
      <div
        className={shape}
        style={{ backgroundColor: color, height: 24, padding: 2 }}
      ></div>
    </div>
  );
}

export default Shape;
