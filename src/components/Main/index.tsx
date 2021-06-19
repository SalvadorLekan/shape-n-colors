import { useEffect, useRef, useState } from "react";
import data from "../../data.json";
import useAuth from "../../hooks/useAuth";
import FilterByColor from "../FilterByColor";
import FilterByShape from "../FilterByShape";
import Shape from "../Shape";
import styles from "./Main.module.scss";

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
    <div className={styles.main}>
      <p className={styles.greeting}>
        Hi, <span>{loggedInUser.name}</span>
      </p>
      <p className={styles.heading}>Filter</p>
      <p className={styles.subheading}>By Color:</p>
      <FilterByColor colors={colors} setColors={setColors} />

      <p className={styles.subheading}>By Shape:</p>

      <FilterByShape shapes={shapes} setShapes={setShapes} />
      <p className={[styles.subheading, styles.capitalize].join(" ")}>
        {itemsType(selectedColors, selectedShapes)} item
        {finalList.length > 2 && "s"}. ({finalList.length})
      </p>
      {finalList}
    </div>
  );
}

function count(arr: Set<string>, size: number) {
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
