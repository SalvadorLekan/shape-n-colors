export default function count(arr: Set<string>, size: number) {
  if (arr.size === size) return "all";
  if (arr.size === 0) return "none";
  if (arr.size === 1) return Array.from(arr.values())[0];
  return "multiple";
}
