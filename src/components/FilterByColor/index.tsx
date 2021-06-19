function FilterByColor({
  colors,
  setColors,
}: {
  colors: BooleanObject;
  setColors: Function;
}) {
  return (
    <div>
      {Object.keys(colors).map((color) => (
        <label
          style={{ backgroundColor: colors[color] ? color : "white" }}
          key={color}
        >
          <input
            type="checkbox"
            checked={colors[color]}
            onChange={(e) => {
              setColors((prev: BooleanObject) => ({
                ...prev,
                [color]: e.target.checked,
              }));
            }}
          />
          {color}
        </label>
      ))}
    </div>
  );
}

export default FilterByColor;
