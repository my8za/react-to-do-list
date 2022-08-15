import React from 'react';
import { MdOutlineCheckBoxOutlineBlank, MdOutlineEdit, MdDelete } from "react-icons/md";

function TodoItem ({item, onDelete, onSelectItem}) {
  console.log(item)
  return (
    <div>
      <div className='todo-item'>
        {item.content}
        <span>
          <MdOutlineCheckBoxOutlineBlank />
          <MdOutlineEdit key={item.id + "edit-btn"} onClick={() => {onSelectItem(item);}} />
          <MdDelete onClick={() => {onDelete(item.id)}}/>
        </span>
      </div>
    </div>
  );
}

export default TodoItem;