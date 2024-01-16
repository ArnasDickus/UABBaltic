import { DndContext } from "@dnd-kit/core";
import Draggable from "./draggable/draggable";
import Droppable from "./droppable/droppable";

const ChessGame = () => {
  return (
    <div className="pt-20">
      <DndContext>
        <Draggable />
        <Droppable />
      </DndContext>
      <p>ChessGamess</p>
    </div>
  );
};
export default ChessGame;
