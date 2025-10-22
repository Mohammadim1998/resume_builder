import { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "@hello-pangea/dnd";

export default function RearrangePanel({ sections, onClose, onSave }) {
  
  const [columns, setColumns] = useState({
    left: sections.slice(0, Math.ceil(sections.length / 2)),
    right: sections.slice(Math.ceil(sections.length / 2)),
  });

  const onDragEnd = (result) => {
    const { source, destination } = result;
    if (!destination) return;

    const sourceCol = source.droppableId;
    const destCol = destination.droppableId;

    const newColumns = { ...columns };
    const [moved] = newColumns[sourceCol].splice(source.index, 1);
    newColumns[destCol].splice(destination.index, 0, moved);

    setColumns(newColumns);
  };

  const handleSave = () => {
    const merged = [...columns.left, ...columns.right];
    onSave(merged);
  };

  return (
    <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
      <div className="bg-white w-[90%] max-w-5xl rounded-xl shadow-lg p-6">
        <DragDropContext onDragEnd={onDragEnd}>
          <div className="grid grid-cols-2 gap-4">
            {["left", "right"].map((colId) => (
              <Droppable droppableId={colId} key={colId}>
                {(provided) => (
                  <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    className="min-h-[300px] rounded-lg p-3 "
                  >
                    {columns[colId].map((sec, index) => (
                      <Draggable
                        key={sec.id}
                        draggableId={sec.id}
                        index={index}
                      >
                        {(provided, snapshot) => (
                          <div
                            ref={provided.innerRef}
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            className={`p-3 mb-2 bg-white select-none rounded-lg shadow-sm border ${
                              snapshot.isDragging
                                ? "border-blue-400 shadow-md"
                                : "border-gray-200"
                            }`}
                          >
                            {sec.title}
                          </div>
                        )}
                      </Draggable>
                    ))}
                    {provided.placeholder}
                  </div>
                )}
              </Droppable>
            ))}
          </div>
        </DragDropContext>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-lg bg-gray-200 hover:bg-gray-300"
          >
            Cancel
          </button>
          <button
            onClick={handleSave}
            className="px-4 py-2 rounded-lg bg-blue-600 text-white hover:bg-blue-700"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
