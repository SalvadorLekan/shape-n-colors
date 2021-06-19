const am = new Set(["all", "multiple"]);
export default function itemsType(
  selectedColors: string,
  selectedShapes: string
) {
  if (selectedColors === "all" && selectedShapes === "all") return "All";
  if (am.has(selectedShapes) && am.has(selectedColors)) return "Multiple";
  if (!am.has(selectedShapes) && !am.has(selectedColors))
    return `${selectedShapes} ${selectedColors}`;
  if (!am.has(selectedShapes)) return `${selectedColors} ${selectedShapes}`;
  return `${selectedShapes} ${selectedColors}`;
}
