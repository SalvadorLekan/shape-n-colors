import styles from "./fbs.module.scss";

function FilterByShape({
  shapes,
  setShapes,
}: {
  shapes: BooleanObject;
  setShapes: Function;
}) {
  return (
    <div className={styles.container}>
      {Object.keys(shapes).map((shape) => (
        <label
          key={shape}
          style={{
            color: shapes[shape] ? "white" : "blueviolet",
            backgroundColor: shapes[shape] ? "blueviolet" : "inherit",
          }}
        >
          {shape}
          <input
            type="checkbox"
            checked={shapes[shape]}
            onChange={(e) => {
              setShapes((prev: BooleanObject) => ({
                ...prev,
                [shape]: e.target.checked,
              }));
            }}
          />
        </label>
      ))}
    </div>
  );
}

export default FilterByShape;
