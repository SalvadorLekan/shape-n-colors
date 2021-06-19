import styles from "./fbc.module.scss";

function FilterByColor({
  colors,
  setColors,
}: {
  colors: BooleanObject;
  setColors: Function;
}) {
  return (
    <div className={styles.container}>
      {Object.keys(colors).map((color) => (
        <label
          style={{ backgroundColor: colors[color] ? color : "white" }}
          key={color}
        >
          <input
            aria-label={color}
            type="checkbox"
            checked={colors[color]}
            onChange={(e) => {
              setColors((prev: BooleanObject) => ({
                ...prev,
                [color]: e.target.checked,
              }));
            }}
          />
        </label>
      ))}
    </div>
  );
}

export default FilterByColor;
