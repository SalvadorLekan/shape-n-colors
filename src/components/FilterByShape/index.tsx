function FilterByShape({
  shapes,
  setShapes,
}: {
  shapes: BooleanObject;
  setShapes: Function;
}) {
  return (
    <div>
      {Object.keys(shapes).map((shape) => (
        <div>
          <input
            type="checkbox"
            checked={shapes[shape]}
            onChange={(e) => {
              setShapes((prev: BooleanObject) => ({
                ...prev,
                [shape]: e.target.checked,
              }));
            }}
          />{" "}
          {shape}
        </div>
      ))}
    </div>
  );
}

export default FilterByShape;
