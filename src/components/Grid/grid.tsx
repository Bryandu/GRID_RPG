import { MouseEvent, useEffect, useState } from "react";
import { GridCanvas } from "./gridStyles";

interface GridPosition { top: string | number, left: string | number }
interface Dimensions { width: number, height: number }

export const Grid = () => {
  const [dimensions, setDimensions] = useState<Dimensions>({ width: 500, height: 400 });
  const [cursor, setCursor] = useState("grab");
  const [mousePosition, setMousePosition] = useState<MouseEvent | null>(null);
  const [gridElement, setGridElement] = useState<HTMLElement | null>(null);
  const [gridPosition, setGridPosition] = useState<GridPosition>({ top: "50%", left: "50%" });

  useEffect(() => {
    setGridElement(document.getElementById("grid"));
  }, []);

  useEffect(() => {
    if (gridElement && mousePosition) {
      setGridPosition({
        top: gridElement.offsetTop + mousePosition.movementY,
        left: gridElement.offsetLeft + mousePosition.movementX
      });
    }
  }, [cursor, mousePosition, gridElement]);

  const handleMouseMove = (e: MouseEvent) => {
    if (cursor === "grabbing") {
      setMousePosition(e);
    }
  };

  const handleMouseDown = (e: MouseEvent) => {
    setCursor("grabbing");
  };

  const handleMouseUp = () => setCursor("grab");

  return (
    <GridCanvas
      id="grid"
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onMouseOut={handleMouseUp}
      style={{
        cursor,
        top: gridPosition.top,
        left: gridPosition.left,
        width: dimensions.width,
        height: dimensions.height,
        transform: "translate(-50%, -50%)",
      }}
    />
  );
};
