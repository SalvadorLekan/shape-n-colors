import { useEffect, useRef, useState } from "react";
import data from "../../data.json";
import useAuth from "../../hooks/useAuth";
import FilterByColor from "../FilterByColor";
import FilterByShape from "../FilterByShape";
import Shape from "../Shape";
export default function Main() {
  const [shapes, setShapes] = useState<BooleanObject>({});
  const [colors, setColors] = useState<BooleanObject>({});
  const [finalList, setFinalList] = useState<JSX.Element[]>([]);
  const [selectedColors, setSelectedColors] = useState("all");
  const [selectedShapes, setSelectedShapes] = useState("all");

  const { loggedInUser } = useAuth();

  const ref = useRef<{
    uniqueColors: BooleanObject;
    uniqueShapes: BooleanObject;
  }>({ uniqueColors: {}, uniqueShapes: {} });

  useEffect(() => {
    const uniqueColors: BooleanObject = {};
    const uniqueShapes: BooleanObject = {};
    data.objects.forEach((obj) => {
      uniqueColors[obj.color] = true;
      uniqueShapes[obj.shape] = true;
    });
    ref.current = { uniqueColors, uniqueShapes };
    setColors(uniqueColors);
    setShapes(uniqueShapes);
    return () => {};
  }, []);

  useEffect(() => {
    const selectedShapes = new Set<string>();
    const selectedColors = new Set<string>();
    const finalList = data.objects.reduce((a, e) => {
      const colorSelected = colors[e.color];
      const shapeSelected = shapes[e.shape];
      shapeSelected && selectedShapes.add(e.shape);
      colorSelected && selectedColors.add(e.color);
      if (colorSelected && shapeSelected)
        a.push(
          <Shape color={e.color} shape={e.shape} key={e.color + e.shape} />
        );
      return a;
    }, Array<JSX.Element>());

    const colorSize = Object.keys(colors).length;
    const shapeSize = Object.keys(shapes).length;
    setSelectedColors(count(selectedColors, colorSize));
    setSelectedShapes(count(selectedShapes, shapeSize));
    setFinalList(finalList);
    return () => {};
  }, [colors, shapes]);

  useEffect(
    function reset() {
      if (selectedColors === "none") setColors(ref.current.uniqueColors);
      if (selectedShapes === "none") setShapes(ref.current.uniqueShapes);
    },
    [selectedColors, selectedShapes]
  );

  return (
    <div>
      <p>Hi, {loggedInUser.name}</p>
      <p>Filter</p>
      <p>By Color:</p>
      <FilterByColor colors={colors} setColors={setColors} />

      <p>By Shape:</p>

      <FilterByShape shapes={shapes} setShapes={setShapes} />
      <p>{itemsType(selectedColors, selectedShapes)} items</p>
      {finalList}
    </div>
  );
}

function count(arr: Set<string>, size: number) {
  console.log({ arr, size });
  if (arr.size === size) return "all";
  if (arr.size === 0) return "none";
  if (arr.size === 1) return Array.from(arr.values())[0];
  return "multiple";
}

function itemsType(selectedColors: string, selectedShapes: string) {
  const am = new Set(["all", "multiple"]);
  if (selectedColors === "all" && selectedShapes === "all") return "All";
  if (am.has(selectedShapes) && am.has(selectedColors)) return "Multiple";
  if (!am.has(selectedShapes) && !am.has(selectedColors))
    return `${selectedShapes} ${selectedColors}`;
  if (!am.has(selectedShapes)) return `${selectedColors} ${selectedShapes}`;
  return `${selectedShapes} ${selectedColors}`;
}
